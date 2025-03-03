const jwt = require("jsonwebtoken");

const User = require('../models/User.js'); 

// const Book = require('../models/Book');



const protect = async (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({message: "Not authorization, no token"});

    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select("-password");
        next();


    }
    catch(error) {
        return res.status(401).json({message: "Token is not valid"});

    }
}

module.exports =  {protect}