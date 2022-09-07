import { Router } from "express";
import verifyToken from "../middlewares/validators/verifyToken.js";
import * as documentController from "../controllers/documentController.js";
import { validateSchema } from "../middlewares/validators/schemasValidator.js";
import documentSchema from "../middlewares/schemas/documentSchema.js";

const documentRoute = Router();

documentRoute.get(
	"/documents",
	verifyToken,
	documentController.sendDocumentsFromUser
);

documentRoute.get(
	"/documents/:id",
	verifyToken,
	documentController.sendDocumentById
);

documentRoute.post(
	"/documents",
	verifyToken,
	validateSchema(documentSchema),
	documentController.newDocument
);

documentRoute.delete(
	"/documents/:id",
	verifyToken,
	documentController.removeDocument
);

export default documentRoute;
