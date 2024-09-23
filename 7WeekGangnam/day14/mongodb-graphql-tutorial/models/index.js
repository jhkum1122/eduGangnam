const mongoose = require('mongoose'); //22
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const MONGO_URL = `mongodb://localhost:27017/mydb?retryWrites=true&w=majority`;
// Connect to mongoDB;t
// Connect to mongoDB
module.exports = () => {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB Connected')
  }).catch(err => {
    console.log(err);
  });
}