const express = require("express");
const router = express.Router();
router.post("/", async (req, res) => {
  const arr = [];
  while (arr.length < req.body.number) {
    const randomNumbers = Math.floor(Math.random() * 20) + 1;
    if (arr.indexOf(randomNumbers) === -1) arr.push(randomNumbers);
  }
  res.send(arr);
});

module.exports = router;
