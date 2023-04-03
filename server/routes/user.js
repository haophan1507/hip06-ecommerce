import { Router } from 'express';
import * as ctrls from '../controllers/user.js';
import { verifyAccessToken } from '../middlewares/verifyToken.js';
const router = Router();

router.post('/register', ctrls.register);
router.post('/login', ctrls.login);
router.get('/current', verifyAccessToken, ctrls.getCurrent);
router.post('/refreshToken', ctrls.refreshAccessToken);
router.get('/logout', ctrls.logout);

export default router;
