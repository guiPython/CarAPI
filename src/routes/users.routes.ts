import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/UseCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/UseCases/updateUserAvatar/updateUserAvatarController";

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
