import { query } from '../../database';


const create = async (disc) => {
  const rawQuery = 'INSERT INTO Discs SET ?';

  const result = await query(rawQuery, disc);

  return result;
};

export default { create };
