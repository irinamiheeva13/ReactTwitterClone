import React from 'react';
import './app-header.css';

function AppHeader({ liked, allPosts }) {
  return (
    <div className="app-header d-flex">
      <h1>Irina Mikheeva</h1>
      <h2>
        {' '}
        {allPosts} notes, liked {liked}
      </h2>
    </div>
  );
}

export default AppHeader;
