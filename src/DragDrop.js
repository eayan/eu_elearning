// src/DragDrop.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './DragDrop.css';

const DragDrop = () => {
  const initialWords = useMemo(() => [
    { id: 1, word: 'dolor', correct: false },
    { id: 8, word: 'delectus', correct: false },
    { id: 3, word: 'voluptatem', correct: false },
    { id: 4, word: 'expedita', correct: false },
    { id: 5, word: 'doloribus', correct: false },
    { id: 6, word: 'doloribus', correct: false },
    { id: 7, word: 'delectus', correct: false },
    { id: 2, word: 'sunt', correct: false },
  ], []);

  const targetSentence = 'Lorem ipsum {0} sit amet. Sit fugit {1} est debitis dicta ex {2} dolorum qui cumque eveniet sed sint nesciunt sit voluptatem optio aut vitae sint. Ex {3} alias non impedit galisum non labore exercitationem vel accusantium aliquam. Aut unde sunt qui {4} doloribus sit internos temporibus et dolores error qui sapiente odit. Vel libero quod nam omnis aliquid aut harum neque. Ut {5} modi aut velit accusantium aut temporibus quae sed facilis dolor nam quas {6} et numquam sint. Ut veritatis aspernatur sed magnam fugiat qui tempore autem aut quae fugit a ratione iusto! Sed delectus autem aut quam sapiente et cumque eveniet! Aut mollitia consequatur et officia delectus et nihil modi quo quod quae sed laboriosam {7}!';

  const [words, setWords] = useState([]);
  const [draggedWord, setDraggedWord] = useState(null);
  const [blanks, setBlanks] = useState(Array(initialWords.length).fill(null));
  const [checked, setChecked] = useState(false);

  const shuffleWords = useCallback(() => {
    const shuffledWords = [...initialWords].sort(() => Math.random() - 0.5);
    setWords(shuffledWords);
  }, [initialWords]);

  useEffect(() => {
    shuffleWords();
  }, [shuffleWords]);

  const handleDragStart = (word) => {
    setDraggedWord(word);
  };

  const handleDrop = (index) => {
    const newBlanks = [...blanks];
    newBlanks[index] = draggedWord;
    setBlanks(newBlanks);
    setDraggedWord(null);
  };

  const handleReset = () => {
    shuffleWords();
    setBlanks(Array(initialWords.length).fill(null));
    setChecked(false);
  };

  const handleCheckAnswers = () => {
    setChecked(true);
  };

  const renderSentence = () => {
    const parts = targetSentence.split(/\{\d+\}/);
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < blanks.length && (
          <span
            className="drop-area"
            onDrop={() => handleDrop(index)}
            onDragOver={(e) => e.preventDefault()}
          >
            {blanks[index] ? (
              <span className="word">{blanks[index].word}</span>
            ) : (
              <span className="placeholder">______</span>
            )}
          </span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="drag-drop-container">
      <h1>Drag and Drop Activity</h1>
      <p className="target-sentence">{renderSentence()}</p>
      <div className="words-container">
        {words.map((word) => (
          <span
            key={word.id}
            draggable
            onDragStart={() => handleDragStart(word)}
            className="draggable-word"
          >
            {word.word}
          </span>
        ))}
      </div>
      <div className="buttons-container">
        <button className="check-button" onClick={handleCheckAnswers}>
          Check Answers
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
      {checked && (
        <div className="feedback">
          {blanks.map((blank, index) => (
            <p key={index}>
              {blank && blank.word === initialWords[index].word
                ? `Answer ${index + 1} is correct!`
                : `Answer ${index + 1} is incorrect. The correct answer is ${initialWords[index].word}`}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DragDrop;
