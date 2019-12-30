/* eslint-disable no-console */
import server from './server';
import database from './database';
import appConfig from './config/app';

const init = async () => {
  try {
    console.log('Server is connecting with database...');
    await database.connect();
  } catch (error) {
    console.log(error);
    return;
  }

  server.listen(appConfig.port, () => {
    console.log(`Server is up and listening on port ${appConfig.port}`);
  });
};

const gracefulExit = async () => {
  console.log('Server is graceful exiting');

  try {
    console.log('Server is disconnecting from database');
    await database.disconnect();
  } catch (error) {
    console.log(error);
  }

  process.exit(0);
};

init();

process.on('SIGINT', gracefulExit);
process.on('SIGTERM', gracefulExit);
