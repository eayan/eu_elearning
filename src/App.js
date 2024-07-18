// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import ClozeTest from './ClozeTest';
import MultipleChoice from './MultipleChoice';
import DragDrop from './DragDrop';
import './App.css';
import './ClozeTest.css';
import './MultipleChoice.css';
import './DragDrop.css'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cloze-test" element={<ClozeTestActivity />} />
          <Route path="/multiple-choice" element={<MultipleChoice />} />
          <Route path="/drag-drop" element={<DragDrop />} />
        </Routes>
      </div>
    </Router>
  );
};

//test
const ClozeTestActivity = () => {
  return (
    <div className="cloze-test-activity">
      <h2>Cloze Test Activity</h2>
      <ClozeTest />
    </div>
  );
};
export default App;