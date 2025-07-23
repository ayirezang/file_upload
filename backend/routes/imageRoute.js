const express = require("express");

const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post(
  "/photos/upload",
  upload.array("photos", 12),
  function (req, res, next) {}
);

module.exports = router;
