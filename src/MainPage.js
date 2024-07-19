// src/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Welcome to Sample Activities Site</h1>
      <h2>EU E-Learning Platform</h2>
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
          <Link to="/drag-drop">Drag and Drop Activity (Text-based)</Link>
        </li>
        <li>
          <Link to="/drag-drop">Drag and Drop Activity (Image-based)</Link>
        </li>
      </ul>
      <p>*Created by E. Ayan, E-Learning Technician.</p>
    </div>
  );
};

export default MainPage;
