import { query } from '.';
import logger from '../app/helpers/logger';

const createDiscs = async () => {
  try {
    const rawQuery = `CREATE TABLE IF NOT EXISTS Discs (
     id int NOT NULL AUTO_INCREMENT,
     name varchar(150) NOT NULL,
     releaseYear year NOT NULL,
     genre varchar(150) NOT NULL,
     recordCompany varchar(200) NOT NULL,
     production varchar(200) NOT NULL,
     cover varchar(300) NOT NULL,
     created_at TIMESTAMP NOT NULL DEFAULT NOW(),
     updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
     PRIMARY KEY (id)
     );`;

    await query(rawQuery);
    logger.info('Discs table was created!');
  } catch (error) {
    logger.error(error);
  }
};

const createTables = async () => {
  await createDiscs();
  process.exit(0);
};

createTables();
