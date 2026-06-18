const asyncHandler = require("express-async-handler");
const login = require("../models/login-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = asyncHandler(async (req, res) => {
    const { userName, userEmail, userPassword } = req.body;

    if (!userName || !userEmail || !userPassword) {
        return res.status(400).json({
            msg: "Fill all details"
        });
    }

    const oldUser = await login.findOne({ userEmail });

    if (oldUser) {
        return res.status(400).json({
            msg: "User already registered"
        });
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const newUser = await login.create({
        userName,
        userEmail,
        userPassword: hashedPassword,
    });

    return res.status(201).json({
        msg: "Registered successfully",
        userId: newUser._id
    });
});

const userLogin = asyncHandler(async(req,res)=>{
    const {
        userEmail,userPassword
    } = req.body;

        if(!userEmail || !userPassword ){
           return  res.status(400).json({msg:"Fill all the details"});
        }

    const oldUser = await login.findOne({ userEmail });
    if (!oldUser) {
    return res.status(400).json({
        msg: "Email or password does not match"
        });
    }

    const matchPassword = await bcrypt.compare(
        userPassword,
        oldUser.userPassword
    );
   
    if (!matchPassword) {
        return res.status(400).json({
            msg: "Email or password does not match"
        });
    }
        
    const accessToken =jwt.sign(
            {
                user: {
                    id: oldUser._id,
                    name: oldUser.userName,
                    email: oldUser.userEmail
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "30m"
            }
    );
     return res.status(200).json({
          accessToken
            });
});

const profile = asyncHandler(async (req, res) => {

    return res.status(200).json({
        id: req.user.id,
        Name: req.user.name,
        Email: req.user.email
    });

});

module.exports = {
    register,
    userLogin,
    profile
};