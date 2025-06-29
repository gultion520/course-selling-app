const express = require("express");
const mongoose = require("mongoose");

const { mongodbURL } = require("./config");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main() {

  const promise = await mongoose.connect(mongodbURL);

  app.listen(3000);
  console.log("app is listening");
}

main();

