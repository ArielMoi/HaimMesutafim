const express = require("express");
const router = new express.Router();
const { func } = require('../controller/volunteer');

router.get('/api', func);
router.post('/api', func);

module.exports = router;