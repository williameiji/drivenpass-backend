import { Router } from "express";
import verifyToken from "../middlewares/validators/verifyToken.js";
import * as credentialController from "../controllers/credentialController.js";

const credentialRoute = Router();

credentialRoute.get(
	"/credentials",
	verifyToken,
	credentialController.sendCredentials
);

credentialRoute.get(
	"/credentials/:id",
	verifyToken,
	credentialController.sendCredentialById
);

credentialRoute.post(
	"/credentials",
	verifyToken,
	credentialController.newCredential
);

credentialRoute.delete(
	"/credentials/:id",
	verifyToken,
	credentialController.removeCredential
);

export default credentialRoute;
