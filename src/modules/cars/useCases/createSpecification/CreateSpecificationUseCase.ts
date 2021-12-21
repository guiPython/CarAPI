import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private repository: ISpecificationRepository
    ) {}

    async execute({ name, description }: IRequest) {
        const specificationAlreadyExists = await this.repository.findByName(
            name
        );

        if (specificationAlreadyExists) {
            throw new AppError("Specification already exists.");
        }

        await this.repository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
