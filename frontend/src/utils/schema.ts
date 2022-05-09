import joi from 'joi'

export const newBookSchema = {
    name: joi.string().required,
    author: joi.string().required(),
}