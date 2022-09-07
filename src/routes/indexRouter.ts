import { Router } from "express";
import authRoute from "./authRoute.js";
import recordRoute from "./recordRoute.js";

const router = Router();

router.use(authRoute);
router.use(recordRoute);

export default router;
