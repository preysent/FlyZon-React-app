const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

  name: {
    type:String, 
    require:true
  },

  email:  {
    type:String, 
    require:true,
    unique:true
  },

  password: {
    type:String, 
    require:true,
    min:[6, 'Must be at least 6']
  },

  address: {
    type:String, 
    require:true
  },

  status: {
    type:String, 
    enum: ['user', 'seller'],
    require:true
  },



});

module.exports =  mongoose.model('user', userSchema);