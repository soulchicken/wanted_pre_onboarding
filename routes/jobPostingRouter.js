const { register } = require("./../service/jobPostingService");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    return res.send(await register(req.body));
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
