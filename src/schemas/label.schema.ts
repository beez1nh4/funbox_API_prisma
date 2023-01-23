import Joi, { ValidationError } from "joi"

export type Label = {
    id?: number,
    name: string,
}

export const LabelSchema = Joi.object({
    name: Joi.string().required(),
})

