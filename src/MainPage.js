// src/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <ul>
        <li>
          <Link to="/content/cloze-test">Cloze Test Activity</Link>
        </li>
        <li>
          <Link to="/content/multiple-choice">Multiple Choice Activity</Link>
        </li>
        <li>
          <Link to="/content/drag-drop">Drag and Drop Activity (Text-based)</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainPage;
