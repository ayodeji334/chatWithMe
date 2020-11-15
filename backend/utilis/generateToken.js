const jwt = require('jsonwebtoken');

//Generate user login token
const generateToken = (user) => {
    return jwt.sign(
        {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
    },
        process.env.JWT_TOKEN || "SignInSecret",
        {
            expiresIn: "1h",
        }
    );
}

module.exports = generateToken;