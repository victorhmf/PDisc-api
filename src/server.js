import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

// import userRoutes from './modules/users/routes';

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

// server.use(userRoutes);

export default server;
