import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

function PostList({ posts, onDelete, onToggleImportant, onToggleLiked }) {
  const elements = posts.map((i) => {
    const { id, ...iProps } = i;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...iProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
}
export default PostList;
