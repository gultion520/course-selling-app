const { Router } = require("express");
const mongoose = require("mongoose");
const { userMiddleware } = require("../middleware/user");
const { courseModel } = require("./db");
const { purchaseModel } = require("./db");

const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async (req ,res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;

  try {
    await purchaseModel.create({
    userId,
    courseId,
    });
    res.json("purchase done");
  } catch (e) {
    res.status(403).json("purchase unsuccessful");
  }

});

courseRouter.get("/preview", async  (req, res) => {
  const course = await courseModel.find({});
  res.json({
    message: "here are all the cources",
    course
  })
});

module.exports = {
  courseRouter: courseRouter,
};

