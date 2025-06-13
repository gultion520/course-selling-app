const { Router } = require("express");
const mongoose = require("mongoose");

const courseRouter = Router();

courseRouter.post("/purchase", (res, req) => {
  req.json({
    message: "purchase a course endpoint",
  });
});

courseRouter.get("/preview", (req, res) => {
  res.json({
    messge: "courses endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
mongoose.connect(
  "mongodb+srv://gulshanrp2000:383bTaioW7uSij8r@cluster0.t8vnuh7.mongodb.net/coursera-app"
);
