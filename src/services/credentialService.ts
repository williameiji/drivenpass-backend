import * as credentialRepository from "../repositories/credentialRepository.js";
import Cryptr from "cryptr";

export async function sendCredentialsFromUser(id: number) {
	const credentials = await credentialRepository.getAllCredentials(id);

	return credentials;
}

export async function findCredentialById(id: number, userId: number) {
	const cryptr = new Cryptr(process.env.SECRET);

	const credential = await checkCredential(id, userId);

	return { ...credential, password: cryptr.decrypt(credential.password) };
}

export async function newCredential(
	data: credentialRepository.TypeNewCredential
) {
	const cryptr = new Cryptr(process.env.SECRET);

	await checkCredentialTitleExist(data.userId, data.title);

	await credentialRepository.insert({
		...data,
		password: cryptr.encrypt(data.password),
	});
}

export async function removeCredential(id: number, userId: number) {
	await checkCredential(id, userId);

	await credentialRepository.deleteCredential(id);
}

async function checkCredential(credentialId: number, userId: number) {
	const credential = await credentialRepository.getCredentialById(credentialId);

	if (!credential)
		throw { code: "NotFound", message: "Credencial não encontrada!" };

	if (credential.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	return credential;
}

async function checkCredentialTitleExist(userId: number, title: string) {
	const credential = await credentialRepository.getCredentialByTitle(
		userId,
		title
	);

	if (credential.length)
		throw {
			code: "Conflict",
			message: "Já existe uma credencial com esse nome!",
		};
}
