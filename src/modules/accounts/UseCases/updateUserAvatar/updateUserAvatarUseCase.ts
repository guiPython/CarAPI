import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../../utils/file";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("UserRepository") private repository: IUserRepository
    ) {}

    async execute(user_id: string, avatar_file): Promise<void> {
        const user = await this.repository.findById(user_id);

        if (user.avatar) await deleteFile(`./tmp/avatar/${user.avatar}`);

        user.avatar = avatar_file;
        await this.repository.create(user);
    }
}

export { UpdateUserAvatarUseCase };
