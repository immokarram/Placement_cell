const mongoose = require('mongoose'); 


// mongoose.connect(`mongodb://0.0.0.0:27017/placement_cell`);

mongoose.connect(`mongodb+srv://placement:ggvdueU5bOVXFhqT@cluster0.xge3fgc.mongodb.net/?retryWrites=true&w=majority`)

const db = mongoose.connection;

db.on('error',console.error.bind(console, "Error connecting to Mongodb"));

db.once('open',function(){   
      console.log('Contected to Database: Mongodb'); }) 
      
      
      module.exports = db;