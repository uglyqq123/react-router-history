import React from 'react';
import { Router, Route } from './demo/browserHistory';
// import { Router, Route } from './demo/hashHistory';
import MyPage from './routes/MyPage';
import ListPage from './routes/ListPage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          to="App-link"
        >
          React-router-demo
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Route path='mine' component={MyPage} />
          <Route path='list' component={ListPage} />
        </Router>
      </header>
      
    </div>
  );
}

export default App;
