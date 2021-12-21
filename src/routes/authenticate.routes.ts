import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/UseCases/authenticateUser/AuthenticateUserController";

const authentications = Router();

const authenticateUserController = new AuthenticateUserController();
authentications.post("/sessions", authenticateUserController.handle);

export { authentications };
