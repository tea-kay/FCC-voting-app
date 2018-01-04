const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const pollSchema = new Schema({
  title: String,
  ownedBy: String,
  options: Object,
  votedBy: Array
}, { timestamps: true });

const ModelClass = mongoose.model('poll', pollSchema);
module.exports = ModelClass;
