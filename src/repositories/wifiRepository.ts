import prisma from "../databases/database.js";

export async function getAllWifis(id: number) {
	return await prisma.wifis.findMany({ where: { userId: id } });
}

export async function getWifiById(id: number) {
	return await prisma.wifis.findUnique({ where: { id } });
}
