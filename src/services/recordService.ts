import { sendCardsFromUser } from "./cardService.js";
import { sendCredentialsFromUser } from "./credentialService.js";
import { sendNotesFromUser } from "./noteService.js";
import { sendWifisFromUser } from "./wifiService.js";
import { sendDocumentsFromUser } from "./documentService.js";

export async function sendCountRecords(id: number) {
	const records = await Promise.all([
		sendCredentialsFromUser(id),
		sendNotesFromUser(id),
		sendCardsFromUser(id),
		sendWifisFromUser(id),
		sendDocumentsFromUser(id),
	])
		.then((valores) => {
			return {
				credentials: valores[0].length,
				notes: valores[1].length,
				cards: valores[2].length,
				wifis: valores[3].length,
				documents: valores[4].length,
			};
		})
		.catch((erro) => {
			console.log(erro.message);
		});

	return records;
}
