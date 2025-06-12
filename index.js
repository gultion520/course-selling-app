const express = require("express");

const app = express();

app.use(express.json());

app.post("/user/signup", (req, res) => {
  res.json({
    message: "signup route",
  });
});

app.post("/user/signin", (req, res) => {
  res.json({
    message: "signin endpoint",
  })

});

app.get("/user/purchases", (req, res) => {
  res.json({
    message: " user purchases endpooint",
  });
});

app.post("/course/purchase", (res, req) => {
  req.json({
    message: "purchase a course endpoint",
  });
});

app.get("/courses", (req, res) => ){
  res.json({
    messge: "courses endpoint",
  });
}




app.use(express.json());


app.listen(3000);

