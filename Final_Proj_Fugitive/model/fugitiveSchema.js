//Imports mongoose module
// creates shorthand reference to schema

const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

//Fugitive Blueprint
//The fields below are required to be entered

//creates new instance of Schema object assigns to fugitiveSchema
const fugitiveSchema = new Schema({
  // Cyber, White Collar, Violent
  type: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  reward: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  last_known_location: {
    type: String,
    required: true,
  },
  additional_info: {
    type: String,
    required: true,
  }
  
});

module.exports = mongoose.model("Wanted", fugitiveSchema);
