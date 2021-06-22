//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://mongodbs:27017/sejuta-cita';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;