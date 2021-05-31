

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paperSchema = new Schema({
  name: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Paper = mongoose.model("Paper", paperSchema);

module.exports = Paper;