import Joi from "joi"

export type Label = {
    id?: number,
    name: string,
}

export const LabelSchema = {
    name: Joi.string().required,
}