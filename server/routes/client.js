const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  console.log("INFO: received GET / Request from " + req.ip);
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});

router.get("/game", (req, res) => {
  console.log("INFO: received GET /game Request from " + req.ip);
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});

router.get("/team", (req, res) => {
  console.log("INFO: received GET /team Request from " + req.ip);
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});

router.get("/leaderboard", (req, res) => {
  console.log("INFO: received GET /leaderboard Request from " + req.ip);
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});

router.get("/rules", (req, res) => {
  console.log("INFO: received GET /rules Request from " + req.ip);
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});

router.get("/login", (req, res) => {
  console.log("INFO: received GET /login Request from " + req.ip);
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});

router.get("/register", (req, res) => {
  console.log("INFO: received GET /register Request from " + req.ip);
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});

router.get("/static/*", (req, res) => {
  console.log("INFO: received GET "+req.path+" Request from " + req.ip);
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", req.path)
  );
});


module.exports = router;
