const { Router } = require("express");
const userRouter = Router();

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

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: " user purchases endpooint",
  });
});

module.exports = {
    userRouter : userRouter,
};
