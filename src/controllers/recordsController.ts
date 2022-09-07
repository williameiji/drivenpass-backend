import { Request, Response } from "express";
import * as recordService from "../services/recordService.js";

export async function sendCounteRecords(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const records = await recordService.sendCountRecords(id);

	res.status(200).send(records);
}
