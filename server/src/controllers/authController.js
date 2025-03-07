const User = require("../models/User.js");
const generateToken = require("../utils/generateToken.js");


const registerUser = async (req, res) => {
    const {username, email, password, role, department} = req.body;

    const userExists = await User.findOne({email}); 

    if (userExists) return res.status(400).json({message: "User already exists"});


    const user = await User.create({username, email, password , role, department});

    if (user) {
        res.status(201).json({
            _id : user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)

        });
    }
    else {
        res.status(400).json({message: "Invalid user data"});

    }
};


const loginUser = async (req, res) => {
    const {email , password} = req.body;

    const user = await User.findOne({email});

    if (user && (await user.matchPassword(password))) {
        res.json ({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)

        });

    }
    else {
        res.status(401).json({message: "Invalid credentials"});

    }
}

module.exports =  {registerUser , loginUser}