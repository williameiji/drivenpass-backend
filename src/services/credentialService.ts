import * as credentialRepository from "../repositories/credentialRepository.js";

export async function sendCredentials(id: number) {
	const credentials = await credentialRepository.getAllCredentials(id);

	return credentials;
}

export async function findCredentialById(id: number, userId: number) {
	const credential = await credentialRepository.getCredentialById(id);

	if (credential.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	return credential;
}

export async function addNewCredentials(id: number) {}
