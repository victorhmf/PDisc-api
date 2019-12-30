import { query } from '../../database';
import schema from '../validators/disc';

const create = async (disc) => {
  await schema.validateAsync(disc, { abortEarly: false, presence: 'required' });

  const rawQuery = 'INSERT INTO Discs SET ?';

  const result = await query(rawQuery, disc);

  return result;
};

export default { create };
