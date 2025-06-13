const { Router } = require("express");

const adminRouter = Router();

const { adminModel } = require("./db");

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "signup route",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "signin endpoint",
  });
});

adminRouter.use("/createCourse", (req, res) => {
    res.json({
        message: "admin endpoint",
    });
});

module.exports = {
    adminRouter : adminRouter,
};