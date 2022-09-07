import * as wifiRepository from "../repositories/wifiRepository.js";
import Cryptr from "cryptr";

export async function sendWifisFromUser(id: number) {
	const wifis = await wifiRepository.getAllWifis(id);

	return wifis;
}

export async function findWifiById(id: number, userId: number) {
	const cryptr = new Cryptr(process.env.SECRET);

	const wifi = await checkWifi(id, userId);

	return { ...wifi, password: cryptr.decrypt(wifi.password) };
}

export async function newWifi(data: wifiRepository.TypeNewWifi) {
	const cryptr = new Cryptr(process.env.SECRET);

	await wifiRepository.insert({
		...data,
		password: cryptr.encrypt(data.password),
	});
}

export async function removeWifi(id: number, userId: number) {
	await checkWifi(id, userId);

	await wifiRepository.deleteWifi(id);
}

async function checkWifi(wifiId: number, userId: number) {
	const wifi = await wifiRepository.getWifiById(wifiId);

	if (!wifi) throw { code: "NotFound", message: "Wi-fi não encontrado!" };

	if (wifi.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	return wifi;
}
