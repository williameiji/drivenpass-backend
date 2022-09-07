import * as noteRepository from "../repositories/noteRepository.js";

export async function sendNotesFromUser(id: number) {
	const notes = await noteRepository.getAllNotes(id);

	return notes;
}

export async function findNoteById(id: number, userId: number) {
	const note = await checkNote(id, userId);

	return note;
}

export async function newNote(data: noteRepository.TypeNewNote) {
	await checkNoteTitleExist(data.userId, data.title);

	await noteRepository.insert(data);
}

export async function removeNote(id: number, userId: number) {
	await checkNote(id, userId);

	await noteRepository.deleteNote(id);
}

async function checkNote(noteId: number, userId: number) {
	const note = await noteRepository.getNoteById(noteId);

	if (!note) throw { code: "NotFound", message: "Nota não encontrada!" };

	if (note.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	return note;
}

async function checkNoteTitleExist(userId: number, title: string) {
	const note = await noteRepository.getNoteByTitle(userId, title);

	if (note.length)
		throw {
			code: "Conflict",
			message: "Já existe uma nota com esse nome!",
		};
}
