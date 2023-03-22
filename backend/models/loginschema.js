const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String
  }
});

let LoginModel = mongoose.model('login', LoginSchema);

module.exports = LoginModel;