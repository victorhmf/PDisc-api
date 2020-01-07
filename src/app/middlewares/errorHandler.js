import { ValidationError } from '@hapi/joi';
import { sanitizeErrors } from '../helpers/errors';
import NotFoundError from '../httpErrors/NotFoundError';
import InternalServerError from '../httpErrors/InternalServerError';

export default (error, _, res, next) => {
  if (error instanceof NotFoundError) {
    return res.status(error.status).json(error.responseMessage());
  }
  if (error instanceof InternalServerError) {
    return res.status(error.status).json(error.responseMessage());
  }
  if (error instanceof ValidationError) {
    const sanitizedError = sanitizeErrors(error.details);

    return res.status(422).json({
      error: {
        type: 'ValidationError',
        messages: sanitizedError,
      },
    });
  }
  return next(error);
};
