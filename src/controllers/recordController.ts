import { Request, Response } from "express";
import * as recordService from "../services/recordService.js";

export async function sendCounteRecords(req: Request, res: Response) {
	const tokenDecoded = res.locals.tokenDecoded;

	const records = await recordService.sendCounteRecords(tokenDecoded.email);

	res.status(200).send(records);
}

export async function sendCredentials(req: Request, res: Response) {
	const tokenDecoded = res.locals.tokenDecoded;

	const credentials = await recordService.sendCredentials(tokenDecoded.email);

	res.status(200).send(credentials);
}

export async function sendNotes(req: Request, res: Response) {
	const tokenDecoded = res.locals.tokenDecoded;

	const notes = await recordService.sendNotes(tokenDecoded.email);

	res.status(200).send(notes);
}

export async function sendCards(req: Request, res: Response) {
	const tokenDecoded = res.locals.tokenDecoded;

	const cards = await recordService.sendCards(tokenDecoded.email);

	res.status(200).send(cards);
}

export async function sendWifis(req: Request, res: Response) {
	const tokenDecoded = res.locals.tokenDecoded;

	const wifis = await recordService.sendWifis(tokenDecoded.email);

	res.status(200).send(wifis);
}
