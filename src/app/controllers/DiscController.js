import discRepository from '../repositories/disc';

const create = async (req, res, next) => {
  try {
    await discRepository.create(req.body);

    return res.status(200).json({ message: 'Disc was created successfully.' });
  } catch (error) {
    return next(error);
  }
};

const list = async (req, res, next) => {
  try {
    const { page, searchParam } = req.query;
    const result = await discRepository.list(page, searchParam);

    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    await discRepository.update(id, req.body);

    return res.status(200).json({ message: 'Disc was updated successfully.' });
  } catch (error) {
    return next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await discRepository.remove(id);

    return res.status(200).json({ message: 'Disc was removed successfully.' });
  } catch (error) {
    return next(error);
  }
};

export default {
  create, list, update, remove,
};
