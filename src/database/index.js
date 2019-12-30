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

const connect = () => new Promise((resolve, reject) => {
  connection.connect((error) => (error ? reject(error) : resolve()));
});

const disconnect = () => new Promise((resolve, reject) => {
  connection.disconnect((error) => (error ? reject(error) : resolve()));
});

const query = (rawQuery) => new Promise((resolve, reject) => {
  connection.query(rawQuery, (error, result) => (error ? reject(error) : resolve(result)));
});

export default { query, connect, disconnect };
