import express from 'express';
import { activateAccount, register, login } from '../controllers/user.js';

const router = express.Router();

router.post('/register', register);
router.post('/activate', activateAccount);
router.post('/login', login);

export default router;
