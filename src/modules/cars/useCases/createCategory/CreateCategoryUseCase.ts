import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoryRepository") private repository: ICategoryRepository
    ) {}

    async execute({ name, description }: IRequest) {
        const categoryAlreadyExists = await this.repository.findByName(name);

        if (categoryAlreadyExists)
            throw new AppError("Category already exists.");
        await this.repository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
