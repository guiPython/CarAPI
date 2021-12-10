import { Router } from "express";

import { categories } from "./category.routes";
import { specifications } from "./specification.routes";

const router = Router();

router.use("/categories", categories);
router.use("/specifications", specifications);

export { router };
