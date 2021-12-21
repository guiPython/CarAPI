import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { UserRepository } from "../../repositories/implementations/UserRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(@inject("UserRepository") private repository: UserRepository) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.repository.findByEmail(email);

        if (!user) throw new AppError("User not exists.");

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) throw new AppError("Incorret user credentials.");

        const token = sign({}, "d0dcb7b225d9a93c5cc3aa93ddc2dd88aa563e0d", {
            subject: user.id,
            expiresIn: "1d",
        });

        const { name } = user;

        return {
            user: {
                name,
                email,
            },
            token,
        };
    }
}

export { AuthenticateUserUseCase };
