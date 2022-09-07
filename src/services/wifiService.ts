import * as wifiRepository from "../repositories/wifiRepository.js";
import Cryptr from "cryptr";

export async function sendWifis(id: number) {
	const wifis = await wifiRepository.getAllWifis(id);

	return wifis;
}

export async function findWifiById(id: number, userId: number) {
	const cryptr = new Cryptr(process.env.SECRET);

	const wifi = await wifiRepository.getWifiById(id);

	if (wifi.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

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
	const wifi = await wifiRepository.getWifiById(id);

	if (wifi.userId !== userId)
		throw {
			code: "Anauthorized",
			message: "Esse item não pertence ao usuário!",
		};

	await wifiRepository.deleteWifi(id);
}
