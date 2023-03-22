import React, { useEffect, useState } from 'react';

import Dropdown from '../Dropdown/Dropdown';

const AllBlogs = ({ getBlogs, blogList, comment, setComment }) => {

  return (
    blogList.map(({ _id, blogName, username, date, comments, content },i) => {
      return (
        <Dropdown
          getBlogs={getBlogs}
          _id={_id}
          blogName={blogName}
          username={username}
          date={date}
          comments={comments}
          content={content}
          comment={comment}
          setComment={setComment}
          key={i}
        />
      );
    })
  );
};

export default AllBlogs;