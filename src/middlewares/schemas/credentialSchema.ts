import joi from "joi";

const credentialSchema = joi.object({
	title: joi.string().required(),
	url: joi
		.string()
		.pattern(
			/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
		)
		.required(),
	user: joi.string().required(),
	password: joi.string().required(),
});

export default credentialSchema;
