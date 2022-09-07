import { Request, Response } from "express";
import * as cardService from "../services/cardService.js";

export async function sendCardsFromUser(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const cards = await cardService.sendCardsFromUser(id);

	res.status(200).send(cards);
}

export async function sendCardById(req: Request, res: Response) {
	const { id: userId } = res.locals.tokenDecoded;
	const { id } = req.params;

	const cards = await cardService.findCardById(Number(id), userId);

	res.status(200).send(cards);
}

export async function newCard(req: Request, res: Response) {
	const data = req.body;
	const { id: userId } = res.locals.tokenDecoded;

	await cardService.newCard({
		...data,
		userId,
		isVirtual: Boolean(data.isVirtual),
	});

	res.sendStatus(201);
}

export async function removeCard(req: Request, res: Response) {
	const { id: userId } = res.locals.tokenDecoded;
	const { id } = req.params;

	await cardService.removeCard(Number(id), userId);

	res.sendStatus(202);
}
