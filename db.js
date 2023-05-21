const mongoose = require("mongoose");

var mongoURL = 'your url'

mongoose.connect(mongoURL,{useUnifiedTopology : true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongodb connection failed')
})

connection.on('connected',()=>{
    console.log('successfully connected to mongodb')
})

module.exports = mongoose
