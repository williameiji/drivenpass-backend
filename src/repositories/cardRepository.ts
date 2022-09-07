import prisma from "../databases/database.js";

export async function getAllCards(id: number) {
	return await prisma.cards.findMany({ where: { userId: id } });
}

export async function getCardById(id: number) {
	return await prisma.cards.findUnique({ where: { id } });
}
