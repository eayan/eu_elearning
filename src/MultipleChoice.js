// src/MultipleChoice.js
import React, { useState } from 'react';
import './MultipleChoice.css';

const MultipleChoice = () => {
    const question = "What is the capital of France?";
    const options = ["Paris", "London", "Berlin", "Madrid"];
    const correctAnswer = "Paris";
  
    const [selectedOption, setSelectedOption] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
  
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    const handleSubmit = () => {
      setIsCorrect(selectedOption === correctAnswer);
    };
  
    return (
      <div className="multiple-choice-container">
        <h2>Multiple Choice Activity</h2>
        <p>{question}</p>
        <form>
          {options.map((option, index) => (
            <div key={index} className="option">
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            </div>
          ))}
        </form>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        {isCorrect !== null && (
          <div className="feedback">
            {isCorrect ? "Correct!" : "Incorrect. The correct answer is Paris."}
          </div>
        )}
      </div>
    );
  };
  
  export default MultipleChoice;