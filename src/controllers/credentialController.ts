import { Request, Response } from "express";
import * as credentialService from "../services/credentialService.js";

export async function sendCredentialsFromUser(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const credentials = await credentialService.sendCredentialsFromUser(id);

	res.status(200).send(credentials);
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

export async function newCredential(req: Request, res: Response) {
	const data = req.body;
	const { id: userId } = res.locals.tokenDecoded;

	await credentialService.newCredential({ ...data, userId });

	res.sendStatus(201);
}

export async function removeCredential(req: Request, res: Response) {
	const { id: userId } = res.locals.tokenDecoded;
	const { id } = req.params;

	await credentialService.removeCredential(Number(id), userId);

	res.sendStatus(202);
}
