const express = require('express');

const router = express.Router();

const Controller = require('../controllers/REQ.controller');


router.route('/').get(Controller.getAll);


module.exports = router;
