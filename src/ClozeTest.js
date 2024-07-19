// src/ClozeTest.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClozeTest.css';

const ClozeTestActivity = () => {
  const navigate = useNavigate();
  const defaultText = 'Lorem ipsum {0} sit amet. Sit fugit {1} est debitis dicta ex {2} dolorum qui cumque eveniet sed sint nesciunt sit voluptatem optio aut vitae sint. Ex {3} alias non impedit galisum non labore exercitationem vel accusantium aliquam. Aut unde sunt qui {4} doloribus sit internos temporibus et dolores error qui sapiente odit. Vel libero quod nam omnis aliquid aut harum neque. Ut {5} modi aut velit accusantium aut temporibus quae sed facilis dolor nam quas {6} et numquam sint. Ut veritatis aspernatur sed magnam fugiat qui tempore autem aut quae fugit a ratione iusto! Sed delectus autem aut quam sapiente et cumque eveniet! Aut mollitia consequatur et officia delectus et nihil modi quo quod quae sed laboriosam {7}!';
  const defaultBlanks = ['dolor', 'delectus', 'voluptatem', 'expedita', 'doloribus', 'doloribus', 'delectus', 'sunt'];

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

  const handleReset = () => {
    setAnswers(Array(defaultBlanks.length).fill(''));
    setChecked(false);
  };

  const renderText = () => {
    const parts = defaultText.split(/\{\d+\}/);
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < defaultBlanks.length && (
          <span className="cloze-block">
            <input
              type="text"
              value={answers[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              className="cloze-input"
              style={{
                borderColor: checked && answers[index] !== defaultBlanks[index] ? 'red' : 'black',
              }}
            />
          </span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="cloze-container">
      <h1>Cloze Test Activity</h1>
      <p className="cloze-text">{renderText()}</p>
      <div className="cloze-buttons">
        <button className="cloze-button" onClick={handleCheckAnswers}>Check Answers</button>
        <button className="cloze-button reset-button" onClick={handleReset}>Reset</button>
        <button className="back-button" onClick={() => navigate('/')}>Back to Main Page</button>
      </div>
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

export default ClozeTestActivity;