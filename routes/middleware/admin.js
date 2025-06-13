const { JWT_ADMIN_PASSWORD } = require("../config");

function adminMiddleware(req, res, next) {
    const token = req.header.authentication;
        const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
    
        if (decoded) {
            req.adminId = decoded;
            next();
        } else {
            res.status(403).json("invalid token of the user");
        }
}

module.exports = {
  adminMiddleware,
};