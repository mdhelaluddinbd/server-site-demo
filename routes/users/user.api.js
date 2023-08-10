const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/users/users.controller");

const userGetRequest = usersController.userGetRequest;

router.get("/users", userGetRequest);
module.exports = router;
