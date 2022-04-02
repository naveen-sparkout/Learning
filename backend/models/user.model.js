const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const uniqueValidator = require("mongoose-unique-validator");

const userschema = new Schema({
    
    first_name :{type: String},
    last_name :{type: String},
    user_name :{type: String},
    city :{type: String},
    state :{type: String},
    zip :{type: Number},
    phone :{type: String},
    email: { type: String }, 
    password: { type: String }, 
    active: Boolean,
    createdBy: ObjectId,
    updatedBy: ObjectId
  }, {versionKey: false});
  userschema.plugin(uniqueValidator);

  module.exports = mongoose.model("user", userschema);
