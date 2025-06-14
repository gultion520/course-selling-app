const { Router } = require("express");

const userRouter = Router();

const jwt = require("jsonwebtoken");

const { z } = require("zod");

const { userModel } = require("./db");

const { purchaseModel } = require("./db");

const { JWT_USER_PASSWORD } = require("../config");

const { userMiddleware } = require("../middleware/user");

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    await userModel.create({
      email,
      password,
      firstName,
      lastName,
    });
    res.status(200).json({ message: "successful user creation" });
  } catch (e) {
    res.status(400).json({ message: "failed user creation" });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );

    res.status(200).json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }

  res.json({
    message: "signin endpoint",
  });
});

userRouter.get("/purchases",userMiddleware, async (req, res) => {
  const userId = req.userId;
  const purchases = await purchaseModel.find({
    userId
  });
  res.json({
    purchases 
  })
});

module.exports = {
  userRouter: userRouter,
};
