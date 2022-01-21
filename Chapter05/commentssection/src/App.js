import React from 'react';
import './App.css';
import CommentsSection from './components/CommentsSection';
import json from './comments.json';

function App() {
  return (
    <div className="App">
      <CommentsSection comments={json.comments} />
    </div>
  );
}

export default App;
