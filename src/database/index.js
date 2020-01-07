import mysql from 'mysql';
import databaseConfig from '../config/database';
import InternalServerError from '../app/httpErrors/InternalServerError';

const {
  host, user, password, database,
} = databaseConfig;

const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
});

const connect = () => new Promise((resolve, reject) => {
  connection.connect((error) => (error ? reject(error) : resolve()));
});

const handleConnectionLostError = () => {
  connection.on('error', (error) => {
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log(error);
    } else {
      throw error;
    }
  });
};

const disconnect = () => new Promise((resolve, reject) => {
  connection.disconnect((error) => (error ? reject(error) : resolve()));
});

export const query = (rawQuery, params) => new Promise((resolve, reject) => {
  connection.query(rawQuery, params, (error, result) => (
    error ? reject(new InternalServerError(error.message)) : resolve(result)
  ));
});

export default { connect, disconnect, handleConnectionLostError };
