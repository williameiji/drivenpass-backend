import * as cardRepository from "../repositories/cardRepository.js";
import Cryptr from "cryptr";

export async function sendCards(id: number) {
	const cards = await cardRepository.getAllCards(id);

	return cards;
}

export async function findCardById(id: number, userId: number) {
	const cryptr = new Cryptr(process.env.SECRET);

	const card = await cardRepository.getCardById(id);

	if (card.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	return {
		...card,
		password: cryptr.decrypt(card.password),
		cvc: cryptr.decrypt(card.cvc),
	};
}

export async function newCard(data: cardRepository.TypeNewCard) {
	const cryptr = new Cryptr(process.env.SECRET);

	const card = await cardRepository.getCardByTitle(data.userId, data.title);

	if (card.length)
		throw {
			code: "Conflict",
			message: "Já existe um cartão com esse nome!",
		};

	await cardRepository.insert({
		...data,
		password: cryptr.encrypt(data.password),
		cvc: cryptr.encrypt(data.cvc),
	});
}

export async function removeCard(id: number, userId: number) {
	const card = await cardRepository.getCardById(id);

	if (card.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	await cardRepository.deleteCard(id);
}
