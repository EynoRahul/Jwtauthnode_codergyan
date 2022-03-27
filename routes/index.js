import express from 'express';
const router = express.Router();
import {registerController,loginController,userController,refreshController} from '../Controllers';
import auth from '../middleware/auth';

router.post('/register',registerController.register);
router.post('/login',loginController.login);
router.get('/me',auth,userController.me);
router.post('/refresh',refreshController.refresh);

export default router; 