import { query } from '.';

const createDiscs = async () => {
  try {
    const rawQuery = 'CREATE TABLE IF NOT EXISTS Discs (\n'
    + 'ID int NOT NULL AUTO_INCREMENT,\n'
    + 'Name varchar(150) NOT NULL,\n'
    + 'ReleaseYear year NOT NULL,\n'
    + 'Genre varchar(150) NOT NULL,\n'
    + 'RecordCompany varchar(200) NOT NULL,\n'
    + 'Production varchar(200) NOT NULL,\n'
    + 'Cover varchar(300) NOT NULL,\n'
    + 'PRIMARY KEY (ID)\n'
    + ');';

    await query(rawQuery);
    console.log('Discs table was created!');
  } catch (error) {
    console.log(error);
  }
};

const createTables = async () => {
  await createDiscs();
  process.exit(0);
};

createTables();
