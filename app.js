const express = require("express");
const { sequelize } = require("./models");
const app = express();

const companyRouter = require("./routes/companyRouter");
const jobPostingRouter = require("./routes/jobPostingRouter");

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use("/company", companyRouter);
app.use("/job-posting", jobPostingRouter);

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
