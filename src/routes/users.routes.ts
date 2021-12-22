import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/UseCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/UseCases/updateUserAvatar/updateUserAvatarController";
import { Router } from "express";
import { ensureAuthenticated } from "middleware/ensureAuthenticated";
import multer from "multer";

const users = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
users.post("/", createUserController.handle);

const updateUserAvatarController = new UpdateUserAvatarController();
users.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);

export { users };
