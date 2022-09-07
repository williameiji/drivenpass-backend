import prisma from "../databases/database.js";

export async function getAllNotes(id: number) {
	return await prisma.notes.findMany({ where: { userId: id } });
}

export async function getNoteById(id: number) {
	return await prisma.notes.findUnique({ where: { id } });
}
