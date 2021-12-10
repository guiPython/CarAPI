import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    constructor(private useCase: CreateSpecificationUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            this.useCase.execute(request.body);
            return response.status(201);
        } catch {
            return response.status(404);
        }
    }
}

export { CreateSpecificationController };
