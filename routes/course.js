const { Router } = require("express");

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
    courseRouter : courseRouter,
};