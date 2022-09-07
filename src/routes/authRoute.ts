import { Router } from "express";
import { validateSchema } from "../middlewares/validators/schemasValidator.js";
import authSchema from "../middlewares/schemas/authSchema.js";
import { login, signup } from "../controllers/authController.js";

const authRoute = Router();

authRoute.post("/login", validateSchema(authSchema), login);
authRoute.post("/signup", validateSchema(authSchema), signup);

export default authRoute;
