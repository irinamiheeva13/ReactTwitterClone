import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

function PostList({ data }) {
  const elements = data.map((i) => {
    const { id, ...iProps } = i;
    return (
      <lic key={id} className="list-group-item">
        <PostListItem {...iProps} />
      </lic>
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
}
export default PostList;
