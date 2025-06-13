require("dotenv").config();

const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const mongodbURL = process.env.mongodbURL;

module.exports = {
  JWT_USER_PASSWORD,
  JWT_ADMIN_PASSWORD,
  mongodbURL
};
