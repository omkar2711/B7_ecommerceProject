import Router from 'express';
import { loginUser, registerUser, getUserProfile, updateUser } from '../controller/userController.js'

const userRouter = Router();

//api routes

//login route
userRouter.post('/login' , loginUser)

//register route
userRouter.post('/register',registerUser)

//get user profile
userRouter.get('/profile' , getUserProfile)

//update user profile
userRouter.put('/update-profile' , updateUser)


export default userRouter;