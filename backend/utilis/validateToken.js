const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const authorizationHeader = req.headers.authorization; //Check if headers has authorization props.
    if (typeof authorizationHeader === 'undefined') {
        res.status(403).json({ message: "Forbidden. Header is undefined" });
    } else {
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
            jwt.verify(token, "signInSecret", (err, user) => {
                if (err) {
                    res.status(403).json({ message: "Invalid token" });
                } else {
                    req.user = user;
                    next();
                }
            });
        } else {
            res.status(403).json({ message: "token is undefined" });
        }
    }
}

module.exports = { validateToken };