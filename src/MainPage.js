// src/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Welcome to the Activities Site for E-Learning Platform</h1>
        <break></break>
        <p>This page is only for testing purposes.</p>
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
      <p>*Created by Erdal Ayan, E-Learning Technician.</p>
    </div>
  );
};

export default MainPage;
