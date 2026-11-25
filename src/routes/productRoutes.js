import { Router } from "express";

import ProductController from "../controllers/ProductController.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/" , ProductController.GetAll)
router.post("/create", ProductController.Create);
router.delete("/delete/:id", auth.authUser ,ProductController.Delete)
router.patch("/update/:id", auth.authUser, ProductController.Update)

export default router;
