import React, { useEffect, useState } from 'react';
import ToggleComment from '../ToggleComment/ToggleComment';
import '../Dropdown/Dropdown.css'

const Dropdown = ({ getBlogs, _id, blogName, username, date, comments, content, comment, setComment }) => {

  const [display, setDisplay] = useState({
    isOpen: false
  });

  const handleToggle = () => {
    if (display.isOpen) {
      setDisplay({
        isOpen: false
      });
    } else {
      setDisplay({
        isOpen: true
      });
    }
  };

  let date2 = date.match(/\D{3}\s\D{3}\s\d{1,}\s\d{4}/);
  let band = blogName.replace(blogName[0], blogName[0].toUpperCase());

  if (display.isOpen) {
    return (
      <div  className='d-grid'>
        <div>
          <button className='band-btn' onClick={handleToggle} key={_id}>{band}</button>
          <ul>{comments.map(({ username, date, comment },i) => {
            return (
              <>
                <div className='com-text' >
                  <h6>{comment}<small>   posted by {username} on {date2}</small></h6>
                </div>
              </>
            );
          })}</ul>
          <ToggleComment
            getBlogs={getBlogs}
            _id={_id}
            comment={comment}
            setComment={setComment} />
        </div>
      </div>
    );
  } else {
    return (
      <div key={_id} className='d-grid gap-3'>
        <button className='btn btn-block band-btn' onClick={handleToggle} key={_id}>{band}</button>
      </div>
    );
  }
};
export default Dropdown;