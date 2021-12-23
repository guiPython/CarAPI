import { AppError } from "@errors/AppError";
import { User } from "@modules/accounts/entities/User";
import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRepositoryInMemory";

import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Create User", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("Should be create a new user", async () => {
        const user = new User();
        user.email = "test@test.com";
        user.password = "test";
        user.driver_licence = "test";

        await createUserUseCase.execute(user);

        const createdUser = await userRepositoryInMemory.findByEmail(
            user.email
        );

        expect(createdUser).toHaveProperty("id");
    });

    it("Should be throw Error User already exists", async () => {
        const user = new User();
        user.email = "test@test.com";
        user.password = "test";
        user.driver_licence = "test";

        await createUserUseCase.execute(user);

        expect(async () => {
            await createUserUseCase.execute(user);
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should be throw Error User already exists", async () => {
        const user = new User();
        user.email = "test@test.com";
        user.password = "test";
        user.driver_licence = "test";

        await createUserUseCase.execute(user);

        expect(async () => {
            await createUserUseCase.execute(user);
        }).rejects.toBeInstanceOf(AppError);
    });
});
