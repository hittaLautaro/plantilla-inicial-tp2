import Joi from "joi";

const schema = Joi.object({
  id: Joi.string()
    .length(6)
    .pattern(/^[A-Z]{3}[0-9]{3}$/)
    .required(),
  xa: Joi.number().required(),
  ya: Joi.number().required(),
  za: Joi.number().required(),
});

export default { schema };
