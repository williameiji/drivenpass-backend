import joi from "joi";

const documentSchema = joi.object({
	type: joi.any().valid("rg", "cnh").required(),
	number: joi.string().required(),
	name: joi.string().required(),
	validate: joi.string().min(10).max(10).required(),
	emission: joi.string().min(10).max(10).required(),
	dispatched: joi.string().required(),
});

export default documentSchema;
