import prisma from "../databases/database.js";
import { documents } from "@prisma/client";

export type TypeNewDocument = Omit<documents, "id">;

export async function getAllDocuments(id: number) {
	return await prisma.documents.findMany({ where: { userId: id } });
}

export async function getDocumentById(id: number) {
	return await prisma.documents.findUnique({ where: { id } });
}

export async function insert(newDocument: TypeNewDocument) {
	await prisma.documents.create({ data: newDocument });
}

export async function deleteDocument(id: number) {
	await prisma.documents.delete({ where: { id } });
}
