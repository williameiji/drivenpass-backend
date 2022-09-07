import prisma from "../databases/database.js";
import { cards } from "@prisma/client";

export type TypeNewCard = Omit<cards, "id">;

export async function getAllCards(id: number) {
	return await prisma.cards.findMany({ where: { userId: id } });
}

export async function getCardById(id: number): Promise<cards> {
	return await prisma.cards.findUnique({ where: { id } });
}

export async function getCardByTitle(userId: number, title: string) {
	return await prisma.cards.findMany({ where: { title, userId } });
}

export async function insert(newCard: TypeNewCard) {
	await prisma.cards.create({ data: newCard });
}

export async function deleteCard(id: number) {
	await prisma.cards.delete({ where: { id } });
}
