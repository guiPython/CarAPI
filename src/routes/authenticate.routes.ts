import { AuthenticateUserController } from "@modules/accounts/UseCases/authenticateUser/AuthenticateUserController";
import { Router } from "express";

const authentications = Router();

const authenticateUserController = new AuthenticateUserController();
authentications.post("/sessions", authenticateUserController.handle);

export { authentications };
