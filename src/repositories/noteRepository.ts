import prisma from "../databases/database.js";
import { notes } from "@prisma/client";

export type TypeNewNote = Omit<notes, "id">;

export async function getAllNotes(id: number) {
	return await prisma.notes.findMany({ where: { userId: id } });
}

export async function getNoteById(id: number) {
	return await prisma.notes.findUnique({ where: { id } });
}

export async function getNoteByTitle(userId: number, title: string) {
	return await prisma.notes.findMany({ where: { title, userId } });
}

export async function insert(newNote: TypeNewNote) {
	await prisma.notes.create({ data: newNote });
}

export async function deleteNote(id: number) {
	await prisma.notes.delete({ where: { id } });
}
