import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { Router } from "express";

const specifications = Router();

const createSpecificationController = new CreateSpecificationController();
specifications.post("", createSpecificationController.handle);

export { specifications };
