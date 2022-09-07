import * as credentialRepository from "../repositories/credentialRepository.js";
import Cryptr from "cryptr";

export async function sendCredentials(id: number) {
	const credentials = await credentialRepository.getAllCredentials(id);

	return credentials;
}

export async function findCredentialById(id: number, userId: number) {
	const cryptr = new Cryptr(process.env.SECRET);

	const credential = await credentialRepository.getCredentialById(id);

	if (!credential)
		throw { code: "NotFound", message: "Credencial não encontrada!" };

	if (credential.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	return { ...credential, password: cryptr.decrypt(credential.password) };
}

export async function newCredential(
	data: credentialRepository.TypeNewCredential
) {
	const cryptr = new Cryptr(process.env.SECRET);

	const credential = await credentialRepository.getCredentialByTitle(
		data.userId,
		data.title
	);

	if (credential.length)
		throw {
			code: "Conflict",
			message: "Já existe uma credencial com esse nome!",
		};

	await credentialRepository.insert({
		...data,
		password: cryptr.encrypt(data.password),
	});
}

export async function removeCredential(id: number, userId: number) {
	const credential = await credentialRepository.getCredentialById(id);

	if (!credential)
		throw { code: "NotFound", message: "Credencial não encontrada!" };

	if (credential.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	await credentialRepository.deleteCredential(id);
}
