const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const userCntrl = require("../controllers/UserController");

router.post("/new", asyncHandler(userCntrl.CreateUser));

router.post("/auth", asyncHandler(userCntrl.Auth));

router.get("/details", asyncHandler(userCntrl.Details));

module.exports = router;
