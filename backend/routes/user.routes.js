const express = require("express");
const router = express.Router();

const UserController = require("../controller/user.controller");
const user = require("../models/user.model");

router.get("/get-user", UserController.readUser);
router.post("/create", UserController.userCreate);

module.exports = router;