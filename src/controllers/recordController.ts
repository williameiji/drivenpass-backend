import { Request, Response } from "express";
import * as recordService from "../services/recordService.js";
import * as credentialService from "../services/credentialService.js";
import * as noteService from "../services/noteService.js";
import * as cardService from "../services/cardService.js";
import * as wifiService from "../services/wifiService.js";

export async function sendCounteRecords(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const records = await recordService.sendCountRecords(id);

	res.status(200).send(records);
}

export async function sendCredentials(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const credentials = await credentialService.sendCredentials(id);

	res.status(200).send(credentials);
}

export async function sendNotes(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const notes = await noteService.sendNotes(id);

	res.status(200).send(notes);
}

export async function sendCards(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const cards = await cardService.sendCards(id);

	res.status(200).send(cards);
}

export async function sendWifis(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const wifis = await wifiService.sendWifis(id);

	res.status(200).send(wifis);
}

export async function sendCredentialById(req: Request, res: Response) {
	const { id: userId } = res.locals.tokenDecoded;
	const { id } = req.params;

	const credentials = await credentialService.findCredentialById(
		Number(id),
		userId
	);

	res.status(200).send(credentials);
}

export async function sendNoteById(req: Request, res: Response) {
	const { id: userId } = res.locals.tokenDecoded;
	const { id } = req.params;

	const notes = await noteService.findNoteById(Number(id), userId);

	res.status(200).send(notes);
}

export async function sendCardById(req: Request, res: Response) {
	const { id: userId } = res.locals.tokenDecoded;
	const { id } = req.params;

	const cards = await cardService.findCardById(Number(id), userId);

	res.status(200).send(cards);
}

export async function sendWifiById(req: Request, res: Response) {
	const { id: userId } = res.locals.tokenDecoded;
	const { id } = req.params;

	const wifis = await wifiService.findWifiById(Number(id), userId);

	res.status(200).send(wifis);
}
