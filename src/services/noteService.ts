import * as noteRepository from "../repositories/noteRepository.js";

export async function sendNotes(id: number) {
	const notes = await noteRepository.getAllNotes(id);

	return notes;
}

export async function findNoteById(id: number, userId: number) {
	const note = await noteRepository.getNoteById(id);

	if (note.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	return note;
}

export async function addNewNotes(id: number) {}
