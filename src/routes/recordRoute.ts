import { Router } from "express";
import verifyToken from "../middlewares/validators/verifyToken.js";
import * as recordController from "../controllers/recordsController.js";

const recordsRoute = Router();

recordsRoute.get("/records", verifyToken, recordController.sendCounteRecords);

export default recordsRoute;
