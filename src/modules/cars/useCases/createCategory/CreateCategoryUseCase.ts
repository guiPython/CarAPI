import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private repository: ICategoryRepository) {}

    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.repository.findByName(
            name.toLocaleLowerCase()
        );

        if (categoryAlreadyExists) throw Error("Category already exists.");
        this.repository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
