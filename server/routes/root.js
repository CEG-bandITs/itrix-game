const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  console.log("INFO: received GET / Request from " + req.ip);
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});

module.exports = router;
