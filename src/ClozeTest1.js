import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClozeTest.css';
import { saveAs } from 'file-saver';

const ClozeTest2 = () => {
  const navigate = useNavigate();
  const defaultText = 'The quick brown fox jumps over the lazy dog.';
  const words = defaultText.split(' ');

  const [blanks, setBlanks] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    createBlanks();
  }, []);

  const createBlanks = () => {
    const blankIndices = [];
    while (blankIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * words.length);
      if (!blankIndices.includes(randomIndex)) {
        blankIndices.push(randomIndex);
      }
    }
    const newBlanks = words.map((word, index) => (blankIndices.includes(index) ? '' : word));
    setBlanks(newBlanks);
  };

  const handleChange = (event, index) => {
    const newBlanks = [...blanks];
    newBlanks[index] = event.target.value;
    setBlanks(newBlanks);
  };

  const handleCheckAnswers = () => {
    setChecked(true);
  };

  const handleReset = () => {
    createBlanks();
    setChecked(false);
  };

  const handleExportToEpub = () => {
    const htmlContent = `
      <h2>Cloze Test Activity</h2>
      <p class="sentence">${words.map((word, index) =>
        blanks.includes(word)
          ? `<input type="text" value="${blanks[index]}" style="width: ${word.length + 2}ch;" readonly />`
          : `${word} `
      ).join('')}</p>
    `;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    saveAs(blob, 'cloze-test.epub');
  };

  return (
    <div className="cloze-test-container">
      <h2>Cloze Test Activity</h2>
      <p className="sentence">
        {words.map((word, index) =>
          blanks.includes(word) ? (
            <input
              key={index}
              type="text"
              value={blanks[index]}
              onChange={(event) => handleChange(event, index)}
              className="blank-input"
              style={{ width: word.length + 2 + 'ch' }}
            />
          ) : (
            <span key={index}>{word} </span>
          )
        )}
      </p>
      <div className="buttons-container">
        <button className="check-button" onClick={handleCheckAnswers}>
          Check Answers
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
        <button className="back-button" onClick={() => navigate('/')}>Back to Main Page</button>
        <button className="export-button" onClick={handleExportToEpub}>
          Export to ePub
        </button>
      </div>
      {checked && (
        <div className="feedback">
          {blanks.map((blank, index) =>
            words.includes(blank) ? (
              <p key={index}>{`Word ${index + 1} is correct!`}</p>
            ) : (
              <p key={index}>{`Word ${index + 1} is incorrect. The correct word is ${words[index]}.`}</p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ClozeTest2;
