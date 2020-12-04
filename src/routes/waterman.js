let express = require('express');
let router = express.Router();
let controller = require("../controllers/watermanController")

// read
router.get('/:id', controller.read);

module.exports = router