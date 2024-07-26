// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import ClozeTestActivity from './ClozeTest';
import MultipleChoice from './MultipleChoice';
import DragDrop from './DragDrop';
import NavBar from './NavBar';
import Home from './Home'
import './ClozeTest.css';
import './MultipleChoice.css';
import './DragDrop.css'; 

const App = () => {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <div className='content'>
        <switch>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/content" element={<MainPage />} />
          <Route path="/content/cloze-test" element={<ClozeTestActivity />} />
          <Route path="/content/multiple-choice" element={<MultipleChoice />} />
          <Route path="/content/drag-drop" element={<DragDrop />} />
        </Routes>
        </switch>
      </div>
      </div>
    </Router>
  );
};
export default App;