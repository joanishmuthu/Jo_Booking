const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://joanish:29101999@shey.pnu20lr.mongodb.net/shey_rooms'

mongoose.connect(mongoURL,{useUnifiedTopology : true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongodb connection failed')
})

connection.on('connected',()=>{
    console.log('successfully connected to mongodb')
})

module.exports = mongoose