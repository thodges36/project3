var mongoose = require("mongoose");

var itemSchema = new mongoose.SchemaTypes({
    name: String,
    image: String,
    description: String,
    poster: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Item, itemsSchema");