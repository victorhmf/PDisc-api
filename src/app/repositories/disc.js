import { query } from '../../database';
import schema from '../validators/disc';

const create = async (params) => {
  await schema.validateAsync(params, { abortEarly: false, presence: 'required' });

  const rawQuery = 'INSERT INTO Discs SET ?';
  await query(rawQuery, params);
};

const count = async () => {
  const rawQuery = 'SELECT COUNT(*) FROM Discs';

  const [totalItems] = await query(rawQuery);

  return totalItems['COUNT(*)'];
};

const list = async (pageNumber, searchParam) => {
  const itemsPerPage = 5;
  const itemsToSkip = ((pageNumber || 1) - 1) * itemsPerPage;

  const whereStatement = 'WHERE CONCAT(name, releaseYear, genre, recordCompany, production) LIKE "%" ? "%"';
  const rawQuery = `SELECT * FROM Discs ${searchParam ? whereStatement : ''} LIMIT ? , ?`;

  const paginateParams = [itemsToSkip, itemsPerPage];
  const queryParams = searchParam ? [searchParam, ...paginateParams] : paginateParams;

  const discs = await query(rawQuery, queryParams);
  const totalItems = await count();

  return { discs, totalItems };
};

const findById = async (id) => {
  const rawQuery = 'SELECT * FROM Discs WHERE id = ?';
  const [disc] = await query(rawQuery, id);

  if (!disc) throw new Error('Invalid id.');

  return disc;
};

const update = async (id, params) => {
  await findById(id);
  await schema.validateAsync(params, { abortEarly: false });

  const rawQuery = 'UPDATE Discs SET ? WHERE id = ?';
  await query(rawQuery, [params, id]);
};

const remove = async (id) => {
  await findById(id);

  const rawQuery = 'DELETE FROM Discs WHERE id = ?';
  await query(rawQuery, id);
};


export default {
  create, update, remove, list, findById,
};
