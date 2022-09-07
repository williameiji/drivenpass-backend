import { Request, Response } from "express";
import * as cardService from "../services/cardService.js";

export async function sendCards(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const cards = await cardService.sendCards(id);

	res.status(200).send(cards);
}

export async function sendCardById(req: Request, res: Response) {
	const { id: userId } = res.locals.tokenDecoded;
	const { id } = req.params;

	const cards = await cardService.findCardById(Number(id), userId);

	res.status(200).send(cards);
}
