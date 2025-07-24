const express = require("express");
require("dotenv").config();

const multer = require("multer");
const { mongoose } = require("mongoose");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");

const app = express();
app.use = cors();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("connected to Mongo"))
  .catch((err) => console.log("MongoDB connection error:", err));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is on port ${PORT}`));
