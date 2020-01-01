import express from 'express';
import discController from './app/controllers/DiscController';

const router = express.Router();

router.post('/discs', discController.create);
router.get('/discs', discController.list);
router.get('/discs/:id', discController.show);
router.put('/discs/:id', discController.update);
router.delete('/discs/:id', discController.remove);

export default router;
