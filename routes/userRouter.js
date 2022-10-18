const { register, resume } = require("./../service/userService");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    return res.send(await register(req.body));
  } catch (error) {
    return res.send(error);
  }
});

router.post("/resume", async (req, res) => {
  try {
    return res.send(await resume(req.body));
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
