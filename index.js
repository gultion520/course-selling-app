const express = require("express");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000);

async function main() {

  const promise = await mongoose.connect(
    "mongodb+srv://gulshanrp2000:t0R07CTlx7mHXywr@cluster0.t8vnuh7.mongodb.net/"
  );
  console.log(promise);
  app.listen(3000);
  console.log("appp is listening");
}

