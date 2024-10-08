const { createHmac, randomBytes } = require('crypto');
const mongoose = require('mongoose');
// Ensure this path is correct
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);
