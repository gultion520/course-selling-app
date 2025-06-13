const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req, res, next) {
    const token = req.header.authentication;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if (decoded) {
        req.userId = decoded;
        next();
    } else {
        res.status(403).json("invalid token of the user");
    }
}

module.exports = {
  userMiddleware
};