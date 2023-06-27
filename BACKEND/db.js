// getting-started.js
const mongoose = require('mongoose');
const mongoURI='mongodb://127.0.0.1:27017/flyzon'


const connectToMongoose = async() =>{
    await mongoose.connect(mongoURI);
    console.log("connected to mongo successfully")
}

module.exports = connectToMongoose;