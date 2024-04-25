import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import MemoExampleInitial from './components/MemoExample/MemoExampleInitial';
import MemoExampleFinal from './components/MemoExample/MemoExampleFinal';
import UseMemoExampleInitial from './components/UseMemoExample/UseMemoExampleInitial';
import UseMemoExampleFinal from './components/UseMemoExample/UseMemoExampleFinal';
import UseCallbackExampleInitial from './components/UseCallbackExample/UseCallbackExampleInitial';
import UseCallbackExampleFinal from './components/UseCallbackExample/UseCallbackExampleFinal';

const App = () => {
  return (
      <Router>
        <div>
          <h1>Ejemplos de rendimiento en React</h1>
          <nav>
            <ul>
              <li>
                <Link to="/memo-initial">Memo - Estado inicial</Link>
              </li>
              <li>
                <Link to="/memo-final">Memo - Estado final</Link>
              </li>
              <li>
                <Link to="/useMemo-initial">UseMemo - Estado inicial</Link>
              </li>
              <li>
                <Link to="/useMemo-final">UseMemo - Estado final</Link>
              </li>
              <li>
                <Link to="/useCallback-initial">UseCallback - Estado inicial</Link>
              </li>
              <li>
                <Link to="/useCallback-final">UseCallback - Estado final</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/memo-initial" component={MemoExampleInitial} />
            <Route path="/memo-final" component={MemoExampleFinal} />
            <Route path="/useMemo-initial" component={UseMemoExampleInitial} />
            <Route path="/useMemo-final" component={UseMemoExampleFinal} />
            <Route path="/useCallback-initial" component={UseCallbackExampleInitial} />
            <Route path="/useCallback-final" component={UseCallbackExampleFinal} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
