import Router from 'express';
import { loginUser, registerUser, logoutUser } from '../controller/authController.js'

const authRouter = Router();

//login,register,logout


authRouter.post('/login' ,loginUser );
authRouter.post('/register', registerUser);
authRouter.post('/logout', logoutUser );


export default authRouter;