import discRepository from '../repositories/disc';

const create = async (req, res) => {
  try {
    const {
      name, releaseYear, genre, recordCompany, production, cover,
    } = req.body;

    await discRepository.create({
      name, releaseYear, genre, recordCompany, production, cover,
    });

    return res.status(200).json({ message: 'Disc was created successfully.' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default { create };
