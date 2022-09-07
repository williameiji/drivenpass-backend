import joi from "joi";

const wifiSchema = joi.object({
	title: joi.string().required(),
	name: joi.string().required(),
	password: joi.string().min(10).required(),
});

export default wifiSchema;
