import discRepository from '../repositories/disc';

const create = async (req, res) => {
  try {
    await discRepository.create(req.body);

    return res.status(200).json({ message: 'Disc was created successfully.' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const { id } = req.params;
    const disc = await discRepository.findById(id);

    return res.status(200).json(disc);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const list = async (req, res) => {
  try {
    const { page, searchParam } = req.query;
    const result = await discRepository.list(page, searchParam);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    await discRepository.update(id, req.body);

    return res.status(200).json({ message: 'Disc was updated successfully.' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await discRepository.remove(id);

    return res.status(200).json({ message: 'Disc was removed successfully.' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default {
  create, show, list, update, remove,
};
