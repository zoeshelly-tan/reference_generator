

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  firstName:{type: String, required: true },
  lastName:{type: String, required: true },
  title: { type: String, required: true },
  // author: { type: String, required: true },
  year:{type:Number, required:true},
  publisher:{type:String, required:true},
  cityPublished:{type:String, required:true},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;