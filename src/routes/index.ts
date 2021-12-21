import { Router } from "express";

import { authentications } from "./authenticate.routes";
import { categories } from "./category.routes";
import { specifications } from "./specification.routes";
import { users } from "./users.routes";

const router = Router();

router.use("/categories", categories);
router.use("/specifications", specifications);
router.use("/users", users);
router.use(authentications);

export { router };
