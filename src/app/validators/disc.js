import Joi from '@hapi/joi';

const schema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(150),

  releaseYear: Joi.number()
    .integer()
    .min(1900)
    .max(2020),

  genre: Joi.string()
    .min(3)
    .max(150),

  recordCompany: Joi.string()
    .min(3)
    .max(200),

  production: Joi.string()
    .min(3)
    .max(200),

  cover: Joi.string()
    .uri(),
});

export default schema;
