import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specifications = Router();

const createSpecificationController = new CreateSpecificationController();
specifications.post("", createSpecificationController.handle);

export { specifications };
