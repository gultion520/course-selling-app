const { JWT_ADMIN_PASSWORD } = require("../config");

const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next) {
    const token = req.headers.authentication;
        const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
    
        if (decoded) {
            req.adminId = decoded.id;
            next();
        } else {
            res.status(403).json({ message: "invalid token of the admin" });
        }
}

module.exports = {
  adminMiddleware,
};