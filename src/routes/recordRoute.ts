import { Router } from "express";
import verifyToken from "../middlewares/validators/verifyToken.js";
import * as recordController from "../controllers/recordController.js";

const recordRoute = Router();

recordRoute.get("/records", verifyToken, recordController.sendCounteRecords);
recordRoute.get(
	"/records/credentials",
	verifyToken,
	recordController.sendCredentials
);
recordRoute.get("/records/notes", verifyToken, recordController.sendNotes);
recordRoute.get("/records/cards", verifyToken, recordController.sendCards);
recordRoute.get("/records/wifis", verifyToken, recordController.sendWifis);

export default recordRoute;
