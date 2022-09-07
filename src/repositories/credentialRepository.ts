import prisma from "../databases/database.js";

export async function getAllCredentials(id: number) {
	return await prisma.credentials.findMany({ where: { userId: id } });
}

export async function getCredentialById(id: number) {
	return await prisma.credentials.findUnique({ where: { id } });
}

export async function findNotesById(id: number) {
	return await prisma.notes.findUnique({ where: { id } });
}
