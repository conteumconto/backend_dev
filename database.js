const mongoose = require('mongoose');
const config = require('./config/main');

console.log(config.database);

function connectDatabase() {
  mongoose.Promise = global.Promise;
  let connection;
  // Check if it is on development environ
  if (process.env.DEV) {
    // Use the local URI to Mongo'
    const localURI = config.database;
    
    connection = mongoose.createConnection(localURI,  {
      useMongoClient: true,
    }).then(() => {
        console.log('Local database connected successfully');
      }).catch((err) => {
        console.error(err);
      });
  }
  // Prodution mode
  if (process.env.MONGODB_URI) {
    connection = mongoose.createConnection(localURI,  {
      useMongoClient: true,
    }).then(() => {
        console.log('Database connected successfully');
      }).catch((err) => {
        console.error(err);
      });
  }
  return connection;
}

module.exports = {
  connectDatabase,
};