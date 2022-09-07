import { Router } from "express";
import verifyToken from "../middlewares/validators/verifyToken.js";
import * as noteController from "../controllers/noteController.js";
import { validateSchema } from "../middlewares/validators/schemasValidator.js";
import noteSchema from "../middlewares/schemas/noteSchema.js";

const noteRoute = Router();

noteRoute.get("/notes", verifyToken, noteController.sendNotesFromUser);

noteRoute.get("/notes/:id", verifyToken, noteController.sendNoteById);

noteRoute.post(
	"/notes",
	verifyToken,
	validateSchema(noteSchema),
	noteController.newNote
);

noteRoute.delete("/notes/:id", verifyToken, noteController.removeNote);

export default noteRoute;
