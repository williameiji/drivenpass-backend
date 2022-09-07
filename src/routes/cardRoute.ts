import { Router } from "express";
import verifyToken from "../middlewares/validators/verifyToken.js";
import * as cardController from "../controllers/cardController.js";
import { validateSchema } from "../middlewares/validators/schemasValidator.js";
import cardSchema from "../middlewares/schemas/cardSchema.js";

const cardRoute = Router();

cardRoute.get("/cards", verifyToken, cardController.sendCards);

cardRoute.get("/cards/:id", verifyToken, cardController.sendCardById);

cardRoute.post(
	"/cards",
	verifyToken,
	validateSchema(cardSchema),
	cardController.newCard
);

cardRoute.delete("/cards/:id", verifyToken, cardController.removeCard);

export default cardRoute;
