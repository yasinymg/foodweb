const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const atlasDbUrl = process.env.MONGODB_URI;

mongoose.connect(atlasDbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected to MongoDB Atlas Successfully');
});

// Models
require('./Category');
require('./Recipe');
