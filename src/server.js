import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';
import errorHandler from './app/middlewares/errorHandler';

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use(routes);
server.use(errorHandler);

export default server;
