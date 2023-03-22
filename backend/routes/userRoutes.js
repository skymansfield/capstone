const router = require('express').Router();

const {
  registerUser,
  loginUser,
  mainPage,
  changePassword,
  deleteUser,
  logout
} = require("../controllers/userControllers");

const { ensureAuthenticated } = require('../../ensure');

router.route('/register').post(registerUser);

router.route('/').post(loginUser);

router.route('/change').post(changePassword, loginUser);

router.route('/delete').post(deleteUser);

router.route('/main').get(ensureAuthenticated, mainPage);

router.route('/logout').get(logout);

module.exports = router;