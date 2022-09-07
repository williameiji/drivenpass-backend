import prisma from "../databases/database.js";
import { wifis } from "@prisma/client";

export type TypeNewWifi = Omit<wifis, "id">;

export async function getAllWifis(id: number) {
	return await prisma.wifis.findMany({ where: { userId: id } });
}

export async function getWifiById(id: number) {
	return await prisma.wifis.findUnique({ where: { id } });
}

export async function getWifiByTitle(userId: number, title: string) {
	return await prisma.wifis.findMany({ where: { title, userId } });
}

export async function insert(newWifi: TypeNewWifi) {
	await prisma.wifis.create({ data: newWifi });
}

export async function deleteWifi(id: number) {
	await prisma.wifis.delete({ where: { id } });
}
