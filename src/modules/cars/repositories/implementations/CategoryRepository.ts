import { Category } from "../../entities/Category";
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "../ICategoryRepository";

import { getRepository, Repository } from "typeorm";

class CategoryRepository implements ICategoryRepository {

    private repository: Repository<Category>
    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({name, description})

        await this.repository.save(category)
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find()
        return categories
    }

    async findByName(name: string): Promise<Category> {
        return await this.repository.findOne({name: name})
    }
}

export {CategoryRepository};
