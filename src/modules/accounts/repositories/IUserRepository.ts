import { User } from "../entities/User";

interface ICreateUserDTO {
    id?: string;
    name: string;
    password: string;
    email: string;
    driver_licence: string;
    avatar?: string;
}

interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(user_id: string): Promise<User>;
}

export { IUserRepository, ICreateUserDTO };
