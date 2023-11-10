import React, { useState } from 'react';
import './App.css'; 

// WordCounter component
const WordCounter = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).length;

  return (
    <div className="word-counter">
      <textarea
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleInputChange}
        rows="6"
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;