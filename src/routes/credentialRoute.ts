import { Router } from "express";
import verifyToken from "../middlewares/validators/verifyToken.js";
import * as credentialController from "../controllers/credentialController.js";
import { validateSchema } from "../middlewares/validators/schemasValidator.js";
import credentialSchema from "../middlewares/schemas/credentialSchema.js";

const credentialRoute = Router();

credentialRoute.get(
	"/credentials",
	verifyToken,
	credentialController.sendCredentialsFromUser
);

credentialRoute.get(
	"/credentials/:id",
	verifyToken,
	credentialController.sendCredentialById
);

credentialRoute.post(
	"/credentials",
	verifyToken,
	validateSchema(credentialSchema),
	credentialController.newCredential
);

credentialRoute.delete(
	"/credentials/:id",
	verifyToken,
	credentialController.removeCredential
);

export default credentialRoute;
