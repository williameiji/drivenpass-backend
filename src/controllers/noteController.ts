import { Request, Response } from "express";
import * as noteService from "../services/noteService.js";

export async function sendNotes(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const notes = await noteService.sendNotes(id);

	res.status(200).send(notes);
}

export async function sendNoteById(req: Request, res: Response) {
	const { id: userId } = res.locals.tokenDecoded;
	const { id } = req.params;

	const notes = await noteService.findNoteById(Number(id), userId);

	res.status(200).send(notes);
}
