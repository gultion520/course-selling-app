const { Router } = require("express");

const adminRouter = Router();


userRouter.post("/signup", (req, res) => {
  res.json({
    message: "signup route",
  });
});

userRouter.post("/signin", (req, res) => {
  res.json({
    message: "signin endpoint",
  });
});

adminRouter.use("/createCourse", (req, res) => {
    req.json({
        message: "admin endpoint",
    });
});

module.exports = {
    adminRouter : adminRouter,
};