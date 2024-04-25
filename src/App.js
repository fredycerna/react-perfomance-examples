/* App.js */

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MemoExampleInitial from './components/MemoExample/MemoExampleInitial';
import MemoExampleFinal from './components/MemoExample/MemoExampleFinal';
import UseMemoExampleInitial from './components/UseMemoExample/UseMemoExampleInitial';
import UseMemoExampleFinal from './components/UseMemoExample/UseMemoExampleFinal';
import UseCallbackExampleInitial from './components/UseCallbackExample/UseCallbackExampleInitial';
import UseCallbackExampleFinal from './components/UseCallbackExample/UseCallbackExampleFinal';
import './App.css';

const App = () => {
  return (
      <Router>
        <div className="container">
          <h1>Ejemplos de rendimiento en React</h1>
          <nav className="nav-container">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/memo-initial" className="nav-link">Memo</Link>
                <ul className="subnav-list">
                  <li>
                    <Link to="/memo-initial" className="subnav-link">Estado inicial</Link>
                  </li>
                  <li>
                    <Link to="/memo-final" className="subnav-link">Estado final</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/useMemo-initial" className="nav-link">UseMemo</Link>
                <ul className="subnav-list">
                  <li>
                    <Link to="/useMemo-initial" className="subnav-link">Estado inicial</Link>
                  </li>
                  <li>
                    <Link to="/useMemo-final" className="subnav-link">Estado final</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/useCallback-initial" className="nav-link">UseCallback</Link>
                <ul className="subnav-list">
                  <li>
                    <Link to="/useCallback-initial" className="subnav-link">Estado inicial</Link>
                  </li>
                  <li>
                    <Link to="/useCallback-final" className="subnav-link">Estado final</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/memo-initial" element={<MemoExampleInitial />} />
            <Route path="/memo-final" element={<MemoExampleFinal />} />
            <Route path="/useMemo-initial" element={<UseMemoExampleInitial />} />
            <Route path="/useMemo-final" element={<UseMemoExampleFinal />} />
            <Route path="/useCallback-initial" element={<UseCallbackExampleInitial />} />
            <Route path="/useCallback-final" element={<UseCallbackExampleFinal />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
