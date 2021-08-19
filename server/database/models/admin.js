

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    required: 'Email is required!',
    lowercase: true,
    index: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  firstname: {
    type: String,
    minlength: [6, 'Minimum name length is 6 characters!']
  },
  lastname: {
    type: String,
    required: true,
    minlength: [6, 'Minimum username length is 6 characters!']
  },
  password: {
    type: String,
    minlength: [6, 'Minimum password length is 6 characters!'],
    maxlength: [32, 'Maximum password length is 32 characters!'],
    required: true
  },
  role: {
    enum: ['admin'],
    type: String,
    required: true,
    default: 'admin'
  },
  info: String,
  createdAt: { type: Date, default: Date.now }
})

adminSchema.pre('save', function(next) {
  const admin = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err) }

    bcrypt.hash(admin.password, salt, function(err, hash) {
      if (err) { return next(err) }

      admin.password = hash;
      next();
    });
  });
})

adminSchema.methods.validatePassword = function(candidatePassword, done) {
  bcrypt.compare(candidatePassword, this.password, function(error, isSuccess) {
    if (error) { return done(error); }

    return done(null, isSuccess);
  })
}

module.exports = mongoose.model('Admin', adminSchema);
