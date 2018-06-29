var mongoose = require("mongoose");

var itemsSchema = new mongoose.Schema({
    category: String,
    image: String,
    item: String,
    price: String,
    first_name: String,
    last_name: String,
    address_1: String,
    address_2: String,
    city: String,
    state: String,
    zip: String,
    email: String,
    phone: String, 





 
});

module.exports = mongoose.model("Item", itemsSchema);