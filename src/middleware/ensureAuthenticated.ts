import { AppError } from "@errors/AppError";
import { UserRepository } from "@modules/accounts/repositories/implementations/UserRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { container } from "tsyringe";

interface IPayload {
    sub: string;
}

async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new AppError("Token missing", 401);

    const [, token] = authHeader.split(" ");
    try {
        const { sub: user_id } = verify(
            token,
            "d0dcb7b225d9a93c5cc3aa93ddc2dd88aa563e0d"
        ) as IPayload;

        const userRepository = container.resolve(UserRepository);

        const user = await userRepository.findById(user_id);
        if (!user) throw new AppError("User does not exists", 401);

        request.user = {
            id: user_id,
        };

        next();
    } catch {
        throw new AppError("Invalid token", 401);
    }
}

export { ensureAuthenticated };
