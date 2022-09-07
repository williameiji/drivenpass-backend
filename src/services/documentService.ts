import * as documentRepository from "../repositories/documentRepository.js";

export async function sendDocumentsFromUser(id: number) {
	const documents = await documentRepository.getAllDocuments(id);

	return documents;
}

export async function findDocumentById(id: number, userId: number) {
	const document = await checkDocument(id, userId);

	return document;
}

export async function newDocument(data: documentRepository.TypeNewDocument) {
	await documentRepository.insert(data);
}

export async function removeDocument(id: number, userId: number) {
	await checkDocument(id, userId);

	await documentRepository.deleteDocument(id);
}

async function checkDocument(documentId: number, userId: number) {
	const document = await documentRepository.getDocumentById(documentId);

	if (!document)
		throw { code: "NotFound", message: "Documento não encontrado!" };

	if (document.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	return document;
}
