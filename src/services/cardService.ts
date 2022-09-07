import * as cardRepository from "../repositories/cardRepository.js";
import Cryptr from "cryptr";

export async function sendCardsFromUser(id: number) {
	const cards = await cardRepository.getAllCards(id);

	return cards;
}

export async function findCardById(id: number, userId: number) {
	const cryptr = new Cryptr(process.env.SECRET);

	const card = await checkCard(id, userId);

	return {
		...card,
		password: cryptr.decrypt(card.password),
		cvc: cryptr.decrypt(card.cvc),
	};
}

export async function newCard(data: cardRepository.TypeNewCard) {
	const cryptr = new Cryptr(process.env.SECRET);

	await checkCardTitleExist(data.userId, data.title);

	await cardRepository.insert({
		...data,
		password: cryptr.encrypt(data.password),
		cvc: cryptr.encrypt(data.cvc),
	});
}

export async function removeCard(id: number, userId: number) {
	await checkCard(id, userId);

	await cardRepository.deleteCard(id);
}

async function checkCard(cardId: number, userId: number) {
	const card = await cardRepository.getCardById(cardId);

	if (!card) throw { code: "NotFound", message: "Cartão não encontrado!" };

	if (card.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	return card;
}

async function checkCardTitleExist(userId: number, title: string) {
	const card = await cardRepository.getCardByTitle(userId, title);

	if (card.length)
		throw {
			code: "Conflict",
			message: "Já existe um cartão com esse nome!",
		};
}
