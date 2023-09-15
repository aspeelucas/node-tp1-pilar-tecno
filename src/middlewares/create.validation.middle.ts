import { NextFunction, Request, Response } from "express";
import joi from "joi";

export function validateStarsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { body } = req;

  const schema = joi.object({
    name: joi.string().required(),
    type: joi
      .string()
      .valid(
        "Estrella binaria",
        "Estrella de la Secuencia Principal",
        "Estrella gigante roja",
        "Supergigante roja",
        "Enana roja"
      )
      .required(),
    age: joi.string().required(),
    stellar_history: joi.array().items(joi.string()),
  })

  const { error, value } = schema.validate(body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
    next();
}
