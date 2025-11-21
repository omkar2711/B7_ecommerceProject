import { loginService, registerService , updateUserService, getUserProfileService} from '../service/userService.js';
import { authenticateToken, authorizeRole } from '../middleware/middleware.js';
import { validateUserBody } from '../model/userModel.js';


const loginUser = async (req, res) => {
    try {
        const userLogin = await loginService(req, res);
        res.send(userLogin);
    }
    catch (error) {
        res.send(error.message);
    }
}

const registerUser = async (req, res) => {
    try {
        // const userRequest = await validateUserBody(req, res, () => {});
        const userRegister = await registerService(req, res);
        res.send(userRegister);
    }
    catch (error) {
        res.send(error.message);
    }

}

const getUserProfile = async (req, res) => {

    try {
        console.log(req.headers);
        const authenicateUser = await authenticateToken(req, res);
        if (!authenicateUser) {
            return res.send("User not authenticated");
        }
        const user = await getUserProfileService(req, res);
        console.log("User Profile in Controller:", user);
        res.send(user);
    }
    catch (error) {
        res.send(error.message);
    }

}

const updateUser = async (req, res) => {
    try{
        const authenicateUser = await authenticateToken(req, res);
        if (!authenicateUser) {
            return res.send("User not authenticated");
        }
        const updatedUser = await updateUserService(req, res);
        res.send(updatedUser);
    }
    catch (error) {
        res.send(error.message);
    }
}

export {
    loginUser,
    registerUser,
    getUserProfile,
    updateUser
}