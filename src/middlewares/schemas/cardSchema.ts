import joi from "joi";

const cardSchema = joi.object({
	title: joi.string().required(),
	number: joi.string().required(),
	name: joi.string().required(),
	cvc: joi.string().min(3).max(3).required(),
	date: joi.string().min(5).max(5).required(),
	password: joi.string().required(),
	type: joi.any().valid("crédito", "débito", "ambos").required(),
});

export default cardSchema;
