import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import * as authRepository from "../repositories/authRepository.js";

dotenv.config();

export async function login(email: string, password: string) {
	const user = await lookForUser(email);
	console.log(user);

	if (user && bcrypt.compareSync(password, user.password)) {
		const token = jwt.sign(
			{
				id: email,
			},
			process.env.SECRET_KEY_TOKEN,
			{ expiresIn: 20 * 60 }
		);

		return token;
	} else {
		throw { code: "Anauthorized", message: "Senha incorreta" };
	}
}

export async function signup(data: authRepository.TypeNewUser) {
	const user = await lookForUser(data.email);

	if (user) throw { code: "Conflict", message: "Usuário já cadastrado!" };

	const SALT = 10;

	const encryptedPassaword = bcrypt.hashSync(data.password, SALT);

	await authRepository.addNewUser({
		email: data.email,
		password: encryptedPassaword,
	});
}

async function lookForUser(email: string) {
	return await authRepository.findUserByEmail(email);
}
