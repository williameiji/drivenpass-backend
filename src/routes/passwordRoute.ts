import { Router } from "express";
import verifyToken from "../middlewares/validators/verifyToken.js";
import * as recordController from "../controllers/passwordsController.js";

const passwordsRoute = Router();

passwordsRoute.get("/records", verifyToken, recordController.sendCounteRecords);

export default passwordsRoute;
