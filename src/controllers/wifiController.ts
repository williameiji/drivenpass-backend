import { Request, Response } from "express";
import * as wifiService from "../services/wifiService.js";

export async function sendWifis(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const wifis = await wifiService.sendWifis(id);

	res.status(200).send(wifis);
}

export async function sendWifiById(req: Request, res: Response) {
	const { id: userId } = res.locals.tokenDecoded;
	const { id } = req.params;

	const wifis = await wifiService.findWifiById(Number(id), userId);

	res.status(200).send(wifis);
}
