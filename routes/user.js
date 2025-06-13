const { Router } = require("express");

const userRouter = Router();

const jwt = require("jsonwebtoken");

const JWT_USER_PASSWORD = "ajhfdkj134";

const { z } = require("zod");

const { userModel } = require("./db");

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

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: " user purchases endpooint",
  });
});

module.exports = {
  userRouter: userRouter,
};
