// src/DragDrop.js
import React, { useState } from 'react';
import './DragDrop.css';

const DragDrop = () => {
  const initialText = 'Drag the correct words into the {0} and {1}, {3}, {4}.';
  const correctWords = ['blank1', 'blank2', 'blank3', 'blank4'];
  const [draggedWord, setDraggedWord] = useState(null);
  const [droppedWords, setDroppedWords] = useState(Array(correctWords.length).fill(null));
  const [isCorrect, setIsCorrect] = useState(Array(correctWords.length).fill(null));

  const handleDragStart = (word) => {
    setDraggedWord(word);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const newDroppedWords = [...droppedWords];
    newDroppedWords[index] = draggedWord;
    setDroppedWords(newDroppedWords);

    const newIsCorrect = [...isCorrect];
    newIsCorrect[index] = draggedWord === correctWords[index];
    setIsCorrect(newIsCorrect);

    setDraggedWord(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const renderText = () => {
    const parts = initialText.split(/\{\d+\}/);
    return parts.map((part, index) => (
    
      <React.Fragment key={index}>
        {part}
        {index < correctWords.length && (
          <span
            className="drop-area"
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
          >
            {droppedWords[index] ? droppedWords[index] : '_____'}
          </span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="drag-drop-container">
        <h2>Drag-Drop Activity</h2>
      <p className="drag-drop-text">{renderText()}</p>
      <div className="words-container">
        {['blank1', 'blank2', 'wrong1', 'wrong2', 'blank3', 'blank4'].map((word, index) => (
          <span
            key={index}
            className="draggable-word"
            draggable
            onDragStart={() => handleDragStart(word)}
          >
            {word}
          </span>
        ))}
      </div>
      {isCorrect.some((result) => result !== null) && (
        <div className="feedback">
          {isCorrect.map((result, index) => (
            <p key={index}>
              {result !== null &&
                (result ? `Word ${index + 1} is correct!` : `Word ${index + 1} is incorrect. Try again.`)}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DragDrop;
