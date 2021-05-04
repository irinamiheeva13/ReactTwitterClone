import React from 'react';
import './post-add-form.css';

function PostAddFrom() {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="What're you thinking about?"
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Add
      </button>
    </form>
  );
}

export default PostAddFrom;
