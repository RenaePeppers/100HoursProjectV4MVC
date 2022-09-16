const express = require("express");
const router = express.Router();
const commitController = require("../controllers/conCommit");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.post("/createCommit", commitController.createCommit);

module.exports = router;
