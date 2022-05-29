import express from 'express';
import { activateAccount, register } from '../controllers/user.js';

const router = express.Router();

router.post('/register', register);
router.post('/activate', activateAccount);

export default router;
