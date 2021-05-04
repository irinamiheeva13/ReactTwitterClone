import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddFrom from '../post-add-form';
import './app.css';

function App() {
  const data = [
    { label: 'Going to learn React', important: true, id: 'sdgre' },
    { label: 'That is so good', important: false, id: 'swrt' },
    { label: 'I need a break', important: false, id: 'cvnter' },
  ];
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList data={data} />
      <PostAddFrom />
    </div>
  );
}

export default App;
