import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoryRepository") private repository: ICategoryRepository
    ) {}

    async execute(): Promise<Category[]> {
        const categories = await this.repository.list();
        return categories;
    }
}

export { ListCategoriesUseCase };
