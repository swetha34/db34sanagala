var hens = require('../models/hens');
// List of all henss

exports.hens_list = async function(req, res) {
    console.log("check")
    try {
        thehens = await hens.find();
        res.send(thehens);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// for a specific hens.
exports.hens_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await hens.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle hens create on POST.
exports.hens_create_post = async function (req, res) {
    console.log(req.body)
    let document = new hens();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"henstype":"goat", "cost":12, "size":"large"}
 
    document.hensname = req.body.hensname;
    document.habitat = req.body.habitat;
    document.classification = req.body.classification;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// Handle hens delete form on DELETE.
exports.hens_delete = function(req, res) {
res.send('NOT IMPLEMENTED: hens delete DELETE ' + req.params.id);
};
// Handle hens update form on PUT.
exports.hens_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await hens.findById( req.params.id)
        // Do updates of properties
        if(req.body.hensname) toUpdate.hensname = req.body.hensname;
        if(req.body.habitat) toUpdate.habitat = req.body.habitat;
        if(req.body.classification) toUpdate.classification = req.body.classification;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
    }
};

// VIEWS
// Handle a show all view
exports.hens_view_all_Page = async function(req, res) {
    try{
    thehens = await hens.find();
    console.log(thehens);
    res.render('hens', { title: 'hens Search Results', results:thehens});
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
    // Handle hens delete on DELETE.
exports.hens_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await hens.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.hens_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await hens.findById( req.query.id)
        res.render('hensdetail', 
{ title: 'hens Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a hens.
// No body, no in path parameter, no query.
// Does not need to be async
exports.hens_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('henscreate', { title: 'hens Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a hens.
// query provides the id
exports.hens_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await hens.findById(req.query.id)
        res.render('hensupdate', { title: 'hens Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.hens_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await hens.findById(req.query.id)
        console.log(result)
        res.render('hensdelete', { title: 'Hens Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};





