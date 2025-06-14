const { JWT_USER_PASSWORD } = require("../config");

const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    const token = req.headers.authentication;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if (decoded) {
        req.userId = decoded.id;
        next();
    } else {
        res.status(403).json({ message: "invalid token of the user" });
    }
}

module.exports = {
  userMiddleware
};