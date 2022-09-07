import * as cardRepository from "../repositories/cardRepository.js";

export async function sendCards(id: number) {
	const cards = await cardRepository.getAllCards(id);

	return cards;
}

export async function findCardById(id: number, userId: number) {
	const card = await cardRepository.getCardById(id);

	if (card.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	return card;
}

export async function addNewCards(id: number) {}
