const {
  register,
  deleteJobPosting,
} = require("./../service/jobPostingService");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    return res.send(await register(req.body));
  } catch (error) {
    return res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const row = await deleteJobPosting(req.params.id);
    if (row) {
      return res.send("채용공고 삭제 완료");
    }
    return res.send("해당 채용공고는 존재하지 않습니다.");
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
