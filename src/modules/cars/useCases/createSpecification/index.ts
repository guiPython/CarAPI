import SpecificationRepository from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const createSpecificationUseCase = new CreateSpecificationUseCase(
    SpecificationRepository
);

const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
);

export { createSpecificationController };
