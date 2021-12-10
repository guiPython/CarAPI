import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private useCase: CreateCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            this.useCase.execute(request.body);
            return response.status(201).send();
        } catch (err) {
            return response.status(404).send();
        }
    }
}

export { CreateCategoryController };
