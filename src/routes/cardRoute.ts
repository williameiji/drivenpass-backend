import { Router } from "express";
import verifyToken from "../middlewares/validators/verifyToken.js";
import * as cardController from "../controllers/cardController.js";

const cardRoute = Router();

cardRoute.get("/cards", verifyToken, cardController.sendCards);

cardRoute.get("/cards/:id", verifyToken, cardController.sendCardById);

export default cardRoute;
