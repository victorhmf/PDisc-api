import mysql from 'mysql';
import databaseConfig from '../config/database';

const {
  host, user, password, database,
} = databaseConfig;

const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
});

const connect = async () => {
  await new Promise((resolve, reject) => {
    connection.connect((error) => (error ? reject(error) : resolve()));
  });
};

const disconnect = () => {
  connection.end();
};

export default { connect, disconnect };
