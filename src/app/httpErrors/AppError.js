export default class AppError extends Error {
  constructor(message, type, status) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.type = type;
    Error.captureStackTrace(this, this.constructor);
  }

  responseMessage() {
    return {
      error: {
        type: this.type,
        message: this.message,
      },
    };
  }
}
