import { AppError } from "@errors/AppError";
import { User } from "@modules/accounts/entities/User";
import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRepositoryInMemory";
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: IUserRepository;

describe("", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(
            userRepositoryInMemory
        );
    });

    it("Should be return response object", async () => {
        const user = new User();
        user.email = "test@test.com";
        user.password = "test";

        await userRepositoryInMemory.create(user);

        const response = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(response).toHaveProperty("token");
    });

    it("Should be throw Error User does not exists", async () => {
        const user = new User();
        user.email = "test@test.com";
        user.password = "test";

        expect(async () => {
            await authenticateUserUseCase.execute({
                email: user.email,
                password: user.password,
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should be twrow Error Incorrect user credentials", async () => {
        const user = new User();
        user.email = "test@test.com";
        user.password = "test";

        const fakePassword = "faketest";
        await userRepositoryInMemory.create(user);

        expect(async () => {
            await authenticateUserUseCase.execute({
                email: user.email,
                password: fakePassword,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
