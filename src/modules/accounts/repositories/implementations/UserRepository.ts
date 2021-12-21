import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
    private readonly repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async findById(user_id: string): Promise<User> {
        const user = await this.repository.findOne(user_id);
        return user;
    }

    async create({
        id,
        name,
        email,
        password,
        driver_licence,
        avatar,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            id,
            name,
            email,
            password,
            driver_licence,
            avatar,
        });
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }
}

export { UserRepository };
