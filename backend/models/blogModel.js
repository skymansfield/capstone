const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  blogName: {
    type: String
  },
  userID: {
    type: String
  },
  username: {
    type: String
  },
  date: {
    type: String,
    default: new Date()
  },
  comments: [
    {
      username: {
        type: String
      },
      userID: {
        type: String
      },
      date: {
        type: String
      },
      comment: {
        type: String
      }
    }
  ]
});

const BlogModel = mongoose.model('blog', BlogSchema);

module.exports = BlogModel;