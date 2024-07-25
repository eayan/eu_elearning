// src/MultipleChoice.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Expander from './expander';
import './MultipleChoice.css';

const MultipleChoice = () => {
  const navigate = useNavigate();
  const text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const initialQuestions = [
      {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        answer: 'Paris',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars',
      },
    ];
  
    const [questions] = useState(initialQuestions);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(initialQuestions.length).fill(null));
    const [checked, setChecked] = useState(false);
  
    const handleOptionChange = (questionIndex, option) => {
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[questionIndex] = option;
      setSelectedAnswers(newSelectedAnswers);
    };
  
    const handleCheckAnswers = () => {
      setChecked(true);
    };
  
    const handleReset = () => {
      setSelectedAnswers(Array(initialQuestions.length).fill(null));
      setChecked(false);
    };
  
    return (
      <div className="multiple-choice-container">
        <h1>Multiple Choice Activity</h1>
        <p>{text}</p>
        <Expander title="Questions">
        {questions.map((q, index) => (
          <div key={index} className="question-block">
            <p className="question">{q.question}</p>
            <div className="options">
              {q.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={selectedAnswers[index] === option}
                    onChange={() => handleOptionChange(index, option)}
                  />
                  {option}
                </label>
              ))} 
            </div>
          </div>
        ))}
        <div className="buttons-container">
          <button className="check-button" onClick={handleCheckAnswers}>
            Check Answers
          </button>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
          <button className="back-button" onClick={() => navigate('/')}>Back to Main Page</button>
        </div>
        {checked && (
          <div className="feedback">
            {questions.map((q, index) => (
              <p key={index}>
                {selectedAnswers[index] === q.answer
                  ? `Question ${index + 1}: Correct!`
                  : `Question ${index + 1}: Incorrect, the correct answer is ${q.answer}.`}
              </p>
            ))}
          </div>
        )}</Expander>
      </div>
    );
  };
  
  export default MultipleChoice;

