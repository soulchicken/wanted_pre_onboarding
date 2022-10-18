const express = require("express");
const { sequelize } = require("./models");
const app = express();

const companyRouter = require("./routes/companyRouter");

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use("/company", companyRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(app.get("port"), () => {
  console.log("express 실행");
});