const express = require("express");
const { sequelize } = require("./models");

const app = express();
app.set("port", process.env.PORT || 3000);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  console.log("get 요청!");
  res.send("get 요청!");
});

app.listen(app.get("port"), () => {
  console.log("express 실행");
});
