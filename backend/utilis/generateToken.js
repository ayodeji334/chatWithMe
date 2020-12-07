const jwt = require('jsonwebtoken');

//Generate user login token
const generateToken = (user) => {
    return jwt.sign(
        { id: user._id },
        "signInSecret",
        { expiresIn: '1h', }
    );
}

module.exports = generateToken;