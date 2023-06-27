const mongoose = require('mongoose');
const { Schema } = mongoose;



const productSchema = new Schema({

  sellerId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
  },

  productTitle: {
    type:String, 
    require:true
  },

  description:  {
    type:[String], 
    require:true
  },

  price: {
    type:Number, 
    require:true
  },

  brand: {
    type:String, 
  },

  category: {
    type:String, 
  },

  images: {
  type:[String],
  default:[]
},

});


module.exports =  mongoose.model('product', productSchema);