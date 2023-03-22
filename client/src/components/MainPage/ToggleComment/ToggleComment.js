import { useState } from 'react';
import FormComment from '../FormComment/FormComment';
import '../ToggleComment/ToggleComment.css';

const ToggleComment = ({ getBlogs, _id, comment, setComment }) => {

  const [open, setOpen] = useState({
    isOpen: false
  });

  const handleFormOpen = () => {
    setOpen({
      isOpen: true
    });
  };

  const handleFormClose = () => {
    setOpen({
      isOpen: false
    });
  };

  if (open.isOpen) {
    return (
      <FormComment
        getBlogs={getBlogs}
        _id={_id}
        setOpen={setOpen}
        onFormClose={handleFormClose}
        comment={comment}
        setComment={setComment}
      />
    );
  } else {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <button className='btn comment-btn' onClick={handleFormOpen}>Add Comment</button>
          </div>
        </div>
      </div>
    );
  }
};

export default ToggleComment;