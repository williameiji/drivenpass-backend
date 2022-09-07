import { sendCardsFromUser } from "./cardService.js";
import { sendCredentialsFromUser } from "./credentialService.js";
import { sendNotesFromUser } from "./noteService.js";
import { sendWifisFromUser } from "./wifiService.js";

export async function sendCountRecords(id: number) {
	const records = await Promise.all([
		sendCredentialsFromUser(id),
		sendNotesFromUser(id),
		sendCardsFromUser(id),
		sendWifisFromUser(id),
	])
		.then((valores) => {
			return {
				credentials: valores[0].length,
				notes: valores[1].length,
				cards: valores[2].length,
				wifis: valores[3].length,
			};
		})
		.catch((erro) => {
			console.log(erro.message);
		});

	return records;
}
