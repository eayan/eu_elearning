// src/ClozeTest.js
import React, { useState } from 'react';
import './ClozeTest.css';

const ClozeTest = () => {
  const defaultText = 'React is a {0} library for building {1} interfaces.';
  const defaultBlanks = ['JavaScript', 'user'];

  const [answers, setAnswers] = useState(Array(defaultBlanks.length).fill(''));
  const [checked, setChecked] = useState(false);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleCheckAnswers = () => {
    setChecked(true);
  };

  const renderText = () => {
    const parts = defaultText.split(/\{\d+\}/);
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < defaultBlanks.length && (
          <input
            type="text"
            value={answers[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            style={{
              borderColor: checked && answers[index] !== defaultBlanks[index] ? 'red' : 'black',
              borderWidth: '1px',
              borderStyle: 'solid',
              marginRight: '5px',
            }}
          />
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="cloze-container">
      <p className="cloze-text">{renderText()}</p>
      <button className="cloze-button" onClick={handleCheckAnswers}>Check Answers</button>
      {checked && (
        <div className="feedback">
          {answers.map((answer, index) => (
            <p key={index}>
              {answer === defaultBlanks[index]
                ? `Answer ${index + 1} is correct!`
                : `Answer ${index + 1} is incorrect. The correct answer is ${defaultBlanks[index]}`}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClozeTest;
