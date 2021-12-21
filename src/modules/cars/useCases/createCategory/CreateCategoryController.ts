import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createCategoryuseCase = container.resolve(CreateCategoryUseCase);
        await createCategoryuseCase.execute(request.body);
        return response.status(201).send();
    }
}

export { CreateCategoryController };
