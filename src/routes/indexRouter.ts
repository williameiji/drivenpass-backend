import { Router } from "express";
import authRoute from "./authRoute.js";
import passwordsRoute from "./passwordRoute.js";
import credentialRoute from "./credentialRoute.js";
import noteRoute from "./noteRoute.js";
import cardRoute from "./cardRoute.js";
import wifiRoute from "./wifiRoute.js";

const router = Router();

router.use(authRoute);
router.use(passwordsRoute);
router.use(credentialRoute);
router.use(noteRoute);
router.use(cardRoute);
router.use(wifiRoute);

export default router;
