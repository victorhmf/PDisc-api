/* eslint-disable no-console */
import server from './server';
import database from './database';
import appConfig from './config/app';
import logger from './app/helpers/logger';

const init = async () => {
  try {
    logger.info('Server is connecting with database...');
    await database.connect();
    database.handleConnectionLostError();
  } catch (error) {
    logger.error(error);
  }

  server.listen(appConfig.port, () => {
    logger.info(`Server is up and listening on port ${appConfig.port}`);
  });
};

const gracefulExit = async () => {
  logger.info('Server is graceful exiting');

  try {
    logger.info('Server is disconnecting from database');
    await database.disconnect();
  } catch (error) {
    logger.error(error);
  }

  process.exit(0);
};

init();

process.on('SIGINT', gracefulExit);
process.on('SIGTERM', gracefulExit);
