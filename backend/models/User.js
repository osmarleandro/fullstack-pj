var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model("olds.User", UserSchema);

module.exports = User;