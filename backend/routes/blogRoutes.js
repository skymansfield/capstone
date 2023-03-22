const router = require('express').Router();

const {
  createPost,
  getBlogs,
  createComment
} = require('../controllers/blogControllers');

router.route('/createPost').post(createPost);
router.route('/getBlogs').get(getBlogs);
router.route('/createComment').post(createComment);

module.exports = router;