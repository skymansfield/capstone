const LoginModel = require('../models/loginschema');
const passport = require('passport');
const bcrypt = require('bcryptjs');

const registerUser = (req, res, next) => {
  LoginModel.findOne({ username: req.body.username }, (err, data) => {
    var hash = bcrypt.hashSync(req.body.password, 12);
    if (err) {
      console.log(err);
    } else if (data) {
      res.json({ message: 'Username already exists' });
    } else {
      let user = new LoginModel({
        username: req.body.username,
        password: hash
      });
      user.save((err, data) => {
        if (err) {
          console.log(err);
        } else {
          passport.authenticate("local", (err, user, info) => {
            if (err) throw err;
            if (!user) res.send("No User Exists");
            else {
              req.logIn(user, (err) => {
                if (err) throw err;
                res.status(200).json({
                  success: true,
                  redirectUrl: '/main',
                  user: req.user
                });
              });
            }
          })(req, res, next);
        }
      });
    }
  });
};

function mainPage(req, res) {
  res.status(200).json({
    success: true,
    redirectUrl: '/',
    user: req.user
  });
}

const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("Please try again");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.status(200).json({
          success: true,
          redirectUrl: '/main',
          user: req.user
        });
      });
    }
  })(req, res, next);
};

const changePassword = (req, res) => {
  if (req.body.newpassword == req.body.psw_repeat) {
    var newhash = bcrypt.hashSync(req.body.newpassword, 12);
    LoginModel.findOneAndUpdate({ username: req.body.username }, { password: newhash }, {
      new: true
    },
      (err, data, info) => {
        if (err) {
          console.log(err);
        } else {
          req.logout();
          res.status(200).json({
            success: true,
            redirectUrl: '/'
          });
        }
      });
  }
};

const deleteUser = (req, res) => {
  LoginModel.findByIdAndRemove({ _id: req.body._id }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        success: true,
        redirectUrl: '/register'
      });
    }
  });
};

const logout = (req, res) => {
  req.logout();
  res.status(200).json({
    success: true,
    redirectUrl: '/'
  });
};

module.exports = { registerUser, loginUser, mainPage, changePassword, deleteUser, logout };