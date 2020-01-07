import winston, { format } from 'winston';

const logger = winston.createLogger({
  format: format.combine(format.colorize(), format.simple()),
  transports: [new winston.transports.Console()],
});

export default logger;
