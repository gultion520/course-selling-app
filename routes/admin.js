const { Router } = require("express");

const adminRouter = Router();

const { adminModel } = require("./db");

const { z } = require("zod");

const jwt = require("jsonwebtoken");

const JWT_ADMIN_PASSWORD = "dhfkjfh46";

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    await adminModel.create({
      email,
      password,
      firstName,
      lastName,
    });
    res.status(200).json({ message: "successful admin creation" });
  } catch (e) {
    res.status(400).json({ message: "failed admin creation" });
  }
});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
    );

    res.status(200).json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

adminRouter.use("/createCourse", (req, res) => {
  res.json({
    message: "admin endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
