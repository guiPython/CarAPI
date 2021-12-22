import { hash } from "bcryptjs";
import { injectable, inject } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
    driver_licence: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository") private repository: IUserRepository
    ) {}

    async execute({
        name,
        email,
        password,
        driver_licence,
    }: IRequest): Promise<void> {
        const userAlreadyExists = await this.repository.findByEmail(email);

        if (userAlreadyExists) throw new AppError("User already exists.");

        const passwordHash = await hash(password, 8);

        await this.repository.create({
            name,
            email,
            password: passwordHash,
            driver_licence,
        });
    }
}

export { CreateUserUseCase };
