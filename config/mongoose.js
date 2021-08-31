const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poster_db');
const db = mongoose.connection;

db.on('Error', console.error.bind("Error while connecting to the Database"));
db.once('open',function(){
    console.log('Connection successful to the DataBase');
});