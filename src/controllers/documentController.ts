import { Request, Response } from "express";
import * as documentService from "../services/documentService.js";

export async function sendDocumentsFromUser(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const documents = await documentService.sendDocumentsFromUser(id);

	res.status(200).send(documents);
}

export async function sendDocumentById(req: Request, res: Response) {
	const { id: userId } = res.locals.tokenDecoded;
	const { id } = req.params;

	const document = await documentService.findDocumentById(Number(id), userId);

	res.status(200).send(document);
}

export async function newDocument(req: Request, res: Response) {
	const data = req.body;
	const { id: userId } = res.locals.tokenDecoded;

	await documentService.newDocument({ ...data, userId });

	res.sendStatus(201);
}

export async function removeDocument(req: Request, res: Response) {
	const { id: userId } = res.locals.tokenDecoded;
	const { id } = req.params;

	await documentService.removeDocument(Number(id), userId);

	res.sendStatus(202);
}
