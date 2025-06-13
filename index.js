const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main() {

  const promise = await mongoose.connect(
    "mongodb+srv://gulshanrp2000:VvBhRa280gcknBwM@cluster0.t8vnuh7.mongodb.net/coursera-app"
  );
  
  app.listen(3000);
  console.log("app is listening");
}

main();

