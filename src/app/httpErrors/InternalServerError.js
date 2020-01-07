import AppError from './AppError';

export default class InternalServerError extends AppError {
  constructor(message) {
    super(message, 'InternalServerError', 500);
  }
}
