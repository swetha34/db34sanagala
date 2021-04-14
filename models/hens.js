const mongoose = require("mongoose")
const hensSchema = mongoose.Schema({
hensname: String,
habitat: String,
classification: String,
price: Number
})
module.exports = mongoose.model("hens", hensSchema)