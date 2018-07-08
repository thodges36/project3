const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  category: {type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  image: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
