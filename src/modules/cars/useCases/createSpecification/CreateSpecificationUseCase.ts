import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private repository: ISpecificationRepository) {}

    execute({ name, description }: IRequest) {
        const specificationAlreadyExists = this.repository.findByName(name);

        if (specificationAlreadyExists) {
            throw Error("Specification already exists.");
        }

        this.repository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
