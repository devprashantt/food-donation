import { Router } from 'express';
import { signUp, signIn } from '../controllers/auth.js';

const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);

export default router;
