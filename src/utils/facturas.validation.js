import Joi from "joi";

const schema = Joi.object({
  numero: Joi.string().length(5).required(),
  tipo: Joi.string().valid("A", "B", "C").required(),
  monto: Joi.number().min(0).required(),
  estado: Joi.string()
    .valid("pendiente de pago", "pagado", "próximo a vencer")
    .required(),
});

const optionalSchema = Joi.object({
  numero: Joi.string().length(5),
  tipo: Joi.string().valid("A", "B", "C"),
  monto: Joi.number().min(0),
  estado: Joi.string().valid("pendiente de pago", "pagado", "próximo a vencer"),
});

export default {
  schema,
  optionalSchema,
};
