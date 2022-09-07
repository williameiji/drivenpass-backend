import * as wifiRepository from "../repositories/wifiRepository.js";

export async function sendWifis(id: number) {
	const wifis = await wifiRepository.getAllWifis(id);

	return wifis;
}

export async function findWifiById(id: number, userId: number) {
	const wifi = await wifiRepository.getWifiById(id);

	if (wifi.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	return wifi;
}

export async function addNewWifis(id: number) {}
