const { Router } = require("express");

const adminRouter = Router();

const { adminModel } = require("./db");

const { courseModel } = require("./db");

const { z } = require("zod");

const jwt = require("jsonwebtoken");

const { JWT_ADMIN_PASSWORD } = require("../config");

const { adminMiddleware } = require("../middleware/admin");

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

adminRouter.post("/createCourse", adminMiddleware, async (req, res) => {
  const { title, description, price, imageUrl } = req.body;

  try {
    const course = await courseModel.create({
      title,
      description,
      price,
      imageUrl,
      creatorId: req.adminId,
    });
    res.status(200).json({
      message: "course created",
      courseId: course._id,
    });
  } catch (e) {
    res.status(403).json({
      message: "unable to create course",
    });
  }
});

adminRouter.put("/changeCourse", adminMiddleware, async (req, res) => {
  const { title, description, price, imageUrl, courseId } = req.body;

  try {
    await courseModel.updateOne(
      {
        _id: courseId,
        creatorId: req.adminId,
      },
      {
        title,
        description,
        price,
        imageUrl,
      }
    );
    res.status(200).json({
      message: "course update",
    });
  } catch (e) {
    res.status(403).json({
      message: "unable to update course",
    });
  }
});

adminRouter.get("/bulk", adminMiddleware, async (req, res) => {

  try {
    const course = await courseModel.find(
      {
        creatorId: req.adminId,
      }
      );
    res.status(200).json({
      message: "found the following cources",
      courses: course
    });
  } catch (e) {
    res.status(403).json({
      message: "unable to find any course",
    });
  }
});

module.exports = {
  adminRouter: adminRouter,
};
