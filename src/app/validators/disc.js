import Joi from '@hapi/joi';

const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(150)
    .messages({
      'string.min': 'Nome deve possui ao menos {#limit} caracteres',
      'string.max': 'Nome deve possui no máximo {#limit} caracteres',
      'any.required': 'Nome não pode estar em branco',
      'string.empty': 'Nome não pode estar em branco',
    }),

  releaseYear: Joi.number()
    .integer()
    .min(1900)
    .max(2020)
    .messages({
      'number.min': 'Ano de Lançamento deve ser maior ou igual a {#limit}',
      'number.max': 'Ano de Lançamento deve ser menor ou igual a {#limit}',
      'any.required': 'Ano de Lançamento é obrigatório',
      'number.base': 'Ano de Lançamento é obrigatório',
    }),

  genre: Joi.string()
    .min(3)
    .max(150)
    .messages({
      'string.min': 'Gênero deve possui ao menos {#limit} caracteres',
      'string.max': 'Gênero deve possui no máximo {#limit} caracteres',
      'any.required': 'Gênero não pode estar em branco',
      'string.empty': 'Gênero não pode estar em branco',
    }),

  recordCompany: Joi.string()
    .min(3)
    .max(200)
    .messages({
      'string.min': 'Gravadora deve possui ao menos {#limit} caracteres',
      'string.max': 'Gravadora deve possui no máximo {#limit} caracteres',
      'any.required': 'Gravadora não pode estar em branco',
      'string.empty': 'Gravadora não pode estar em branco',
    }),

  production: Joi.string()
    .min(3)
    .max(200)
    .messages({
      'string.min': 'Produção deve possui ao menos {#limit} caracteres',
      'string.max': 'Produção deve possui no máximo {#limit} caracteres',
      'any.required': 'Produção não pode estar em branco',
      'string.empty': 'Produção não pode estar em branco',
    }),

  cover: Joi.string()
    .uri()
    .messages({
      'any.required': 'Capa do Albúm não pode estar em branco',
      'string.empty': 'Capa do Albúm não pode estar em branco',
      'string.uri': 'Capa do Albúm deve ser uma uri válida',
    }),
});

export default schema;
