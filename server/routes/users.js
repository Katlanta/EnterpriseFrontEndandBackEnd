var express = require('express');
var router = express.Router();
const User = require('../models/userSchema');
const bcryptjs = require('bcryptjs');
const validator = require('email-validator');
const app = require('../app');



router.post('/login', async function (req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.send({
      success: false,
      error: 'Please provide a username and password'
    });
  }

  const user = await User.findOne({ $or: [{username}, {email: username}] });

  if (!user) {
    return res.send({
      success: false,
      error: 'Invalid username or password'
    });
  }

  const validPassword = bcryptjs.compareSync(password,user.password);

  if (!validPassword) {
    return res.send({
      success: false,
      error: 'Invalid username or password'
    });
  }

  req.session.user = user._id;

  return res.send({
    success: true,
    user: user,
    message: 'You have successfully logged in',
  });
});

router.post('/register', async function (req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.json({
      success: false,
      error: 'All fields are required'
    });
  }

  if (!validator.validate(email)) {
    return res.json({
      success: false,
      error: 'Email is invalid'
    });
  }

  const user = await User.findOne({ email });

  if (user) {
    return res.json({
      success: false,
      error: 'Email is already in use'
    });
  }

  const userCheck = await User.findOne({ username });

  if (userCheck) {
    return res.json({
      success: false,
      error: 'Username is already in use'
    });
  }

  const newUser = new User({
    username,
    email,
    password: bcryptjs.hashSync(password,10),
    isAdmin: false
  });

  await newUser.save();
  req.session.user = newUser._id;
  
  res.json({
    success: true,
    user: newUser,
    message: 'User created successfully'
  });
});

router.post('/logout', function (req, res) {
  req.session.destroy();
  return res.send({
    success: true,
    message: 'You have successfully logged out'
  });
});

module.exports = router;
