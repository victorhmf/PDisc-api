import express from 'express';
import discController from './app/controllers/DiscController';

const router = express.Router();

router.post('/discs', discController.create);
// router.put('/users/:id', usersController.update);
// router.delete('/users/:id', remove);

export default router;
