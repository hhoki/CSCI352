const express = require("express");
const postControllers = require("../controllers/careplanControllers");
const router = express.Router();

// @route GET && POST - /careplans/
router
  .route("/")
  .get(careplanControllers./*TODO:: controllers functions*/)
  .post(careplanControllers./*TODO:: controllers functions*/);

router.route("/:id").get(careplanControllers./*TODO:: controllers functions*/);

module.exports = router;
