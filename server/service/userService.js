import User from '../model/userModel.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { getUserIdFromRequest } from '../helper/helper.js';
import 'dotenv/config'


const loginService = async (req,res) => {
     try {
        let user = await User.findOne({email : req.body.email})
        if(!user){
            return res.send("Email id is not registered")
        }
       
        //verify password
        const isMatch = await bcrypt.compare(req.body.pass , user.password);
        if(!isMatch){
            return  res.send("Invalid credentials");
        }

        //jwt token
        const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });


        res.json({ token });
    }
    catch (error) {
        res.send(error.message);
    }
}


const registerService = async (req,res) => {

    try {
        const { userName, email, pass, profilePic, role} = req.body;

        let user = await User.findOne({email : email});
        if(user){
            return res.send("email id already registered!")
        }
        const hashedPassword = await bcrypt.hash(pass, 10);

        user = new User({
            userName: userName,
            email: email,
            password: hashedPassword,
            profilePic: profilePic,
            role : role
        })

        user = await user.save();

        if (!user) {
            return res.status(400).send("User Cannot created");
        }

        res.status(201).json({message : "User Created Successfully", user});
    }
    catch (error) {
        res.send(error.message);
    }
}


const getUserProfileService = async (req,res) => {
    try {
        const userId = getUserIdFromRequest(req);
        console.log("Decoded User ID:", userId);
        const user = await User.findById(userId).select('-password');
        if(!user){
            return res.status(404).send("User not found");
        }
        console.log("User Profile:", user);
        return user;
    }
    catch (error) {
        res.send(error.message);
    }

}

const updateUserService = async (req,res) => {
    try{
        const userId = getUserIdFromRequest(req);
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).send("User not found");
        }

        if(req.body.pass){
            req.body.pass = await bcrypt.hash(req.body.pass, 10);
        }

        const updatedata = {
            userName : req.body.userName || user.userName,
            email : req.body.email || user.email,
            profilePic : req.body.profilePic || user.profilePic,
            password : req.body.pass || user.password
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updatedata, { new: true }).select('-password');
        return updatedUser;
    }
    catch(error){
        res.send(error.message);
    }
}


export {
    loginService,
    registerService,
    getUserProfileService,
    updateUserService
}