import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private useCase: ListCategoriesUseCase) {}

    handle(request: Request, response: Response) {
        return response.json(this.useCase.execute());
    }
}

export { ListCategoriesController };
