import { Router } from "express";
import verifyToken from "../middlewares/validators/verifyToken.js";
import * as noteController from "../controllers/noteController.js";

const noteRoute = Router();

noteRoute.get("/notes", verifyToken, noteController.sendNotes);

noteRoute.get("/notes/:id", verifyToken, noteController.sendNoteById);

export default noteRoute;
