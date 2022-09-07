import { Router } from "express";
import verifyToken from "../middlewares/validators/verifyToken.js";
import * as noteController from "../controllers/noteController.js";

const noteRoute = Router();

noteRoute.get("/notes", verifyToken, noteController.sendNotes);

noteRoute.get("/notes/:id", verifyToken, noteController.sendNoteById);

noteRoute.post("/notes", verifyToken, noteController.newNote);

noteRoute.delete("/notes/:id", verifyToken, noteController.removeNote);

export default noteRoute;
