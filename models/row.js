const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rowSchema = new Schema({
  week: { type: Number, required: true},
  year: { type: Number, required: true},
  rows: [{
    time: { type: String, required: false },
    type: { type: String, required: false },
    days: [{
      numGuests: {type: String, required: false},
      guides: [String]
    }]
  }]
});

const Row = mongoose.model("Row", rowSchema);

module.exports = Row;