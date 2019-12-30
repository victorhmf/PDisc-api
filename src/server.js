import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use(routes);

export default server;
