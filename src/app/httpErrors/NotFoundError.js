import AppError from './AppError';

export default class NotFoundError extends AppError {
  constructor(message) {
    super(message, 'NotFoundError', 404);
  }
}
