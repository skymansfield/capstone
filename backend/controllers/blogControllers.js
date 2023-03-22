const BlogModel = require('../models/blogModel');

const createPost = (req, res) => {
  BlogModel.findOne({ blogName: req.body.blogName }, (err, data) => {
    if (err) {
      console.log(err);
    } else if (data) {
      res.json({ message: 'Band Name already exists' });
    } else {
      let blog = new BlogModel({
        username: req.body.username,
        blogName: req.body.blogName,
        content: req.body.content
      });
      blog.save((err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            success: true,
            redirectUrl: '/main'
          });
        }
      });
    }
  });
};

const getBlogs = (req, res) => {
  BlogModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
};

const createComment = (req, res) => {
  BlogModel.findById({ _id: req.body.blogId }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let blogComment = {
        username: req.body.username,
        date: new Date(),
        comment: req.body.comment
      };
      data.comments.unshift(blogComment);
      data.save((err, info) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            success: true,
            redirectUrl: '/main'
          });
        }
      });
    }
  });
};

module.exports = { createPost, getBlogs, createComment };