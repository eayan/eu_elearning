// src/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Welcome to the E-Learning Platform</h1>
        <break></break>
      <ul>
        <li>
          <Link to="/cloze-test">Cloze Test Activity</Link>
        </li>
        <li>
          <Link to="/multiple-choice">Multiple Choice Activity</Link>
        </li>
        <li>
          <Link to="/drag-drop">Drag and Drop Activity</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainPage;
