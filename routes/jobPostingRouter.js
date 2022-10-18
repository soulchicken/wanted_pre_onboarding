const {
  registerJobPosting,
  deleteJobPosting,
  findAllJobPosting,
  findByIdJobPosting,
  updateJobPosting,
  findBySearchQueryJobPosting,
} = require("./../service/jobPostingService");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    return res.send(await registerJobPosting(req.body));
  } catch (error) {
    return res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    return res.send(await deleteJobPosting(req.params.id));
  } catch (error) {
    return res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    return res.send(await findAllJobPosting());
  } catch (error) {
    return res.send(error);
  }
});

router.get("/search", async (req, res) => {
  try {
    return res.send(await findBySearchQueryJobPosting(req.query.query));
  } catch (error) {
    return res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    return res.send(await findByIdJobPosting(req.params.id));
  } catch (error) {
    return res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    return res.send(await updateJobPosting(req.params.id, req.body));
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
