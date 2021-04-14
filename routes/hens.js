var express = require('express');
const hens_controlers= require('../controllers/hens');
var router = express.Router();
/* GET costumes */
router.get('/', hens_controlers.hens_view_all_Page );
module.exports = router;