import { User } from "@modules/accounts/entities/User";
import { hash } from "bcryptjs";

import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class UserRepositoryInMemory implements IUserRepository {
    private users: User[] = [];

    async create({
        email,
        password,
        name,
        driver_licence,
    }: ICreateUserDTO): Promise<void> {
        const user = new User();
        Object.assign(user, {
            email,
            password: await hash(password, 1),
            name,
            driver_licence,
        });
        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find((u) => u.email === email);
        return user;
    }

    async findById(user_id: string): Promise<User> {
        const user = this.users.find((u) => u.id === user_id);
        return user;
    }
}

export { UserRepositoryInMemory };
