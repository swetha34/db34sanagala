var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var hens_controller = require('../controllers/hens');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// hens ROUTES ///
// POST request for creating a hens.
router.post('/resource/hens', hens_controller.hens_create_post);
// DELETE request to delete hens.
router.delete('/resource/hens/:id', hens_controller.hens_delete);
// PUT request to update hens.
router.put('/resource/hens/:id', hens_controller.hens_update_put);
// GET request for one hens.
router.get('/resource/hens/:id', hens_controller.hens_detail);
// GET request for list of all hens items.
router.get('/resource/hens', hens_controller.hens_list);
/* GET detail hens page */
router.get('/detail', hens_controller.hens_view_one_Page);
/* GET create hens page */
router.get('/create', hens_controller.hens_create_Page);
/* GET create update page */
router.get('/update', hens_controller.hens_update_Page);
/* GET create hens page */
router.get('/delete', hens_controller.hens_delete_Page);





module.exports = router;