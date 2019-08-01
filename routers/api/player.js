const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const db = require("../../config/queries");
const uuid = require("uuid");

// the validation part need to be completed //

router.post(
  "/",
  [
    check("player", "player name is required")
      .not()
      .isEmpty(),
    check("email", "please insert valid email").isEmail(),
  ],
  async (req, res) => {
    try {
      const newData = { ...req.body, date: new Date(), id: uuid() };
      await db.createPlayer(newData);
      res.send({ id: newData.id });
    } catch (err) {
      throw err;
    }
  },
);

module.exports = router;
