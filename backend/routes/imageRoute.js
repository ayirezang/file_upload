const express = require("express");

const router = express.Router();
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: function (req, res, cb) {
    cb(
      null,
      file.filename + "-" + Date.now() + path.extreme(file.originalname)
    );
  },
});

const upload = multer({ storage });

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("no file selected");
  }
  res.send(`file uploaded:${req.file.filename}`);
});

// router.post(
//   "/photos/upload",
//   upload.array("photos", 12),
//   function (req, res, next) {}
// );

module.exports = router;
