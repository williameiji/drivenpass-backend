import { sendCards } from "./cardService.js";
import { sendCredentials } from "./credentialService.js";
import { sendNotes } from "./noteService.js";
import { sendWifis } from "./wifiService.js";

export async function sendCountRecords(id: number) {
	const records = await Promise.all([
		sendCredentials(id),
		sendNotes(id),
		sendCards(id),
		sendWifis(id),
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
