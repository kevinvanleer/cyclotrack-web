import React from 'react';
import './App.css';
import logo from './cyclotrack-app.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>Cyclotrack</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Cyclotrack from the Google Play Store
        </a>
      </header>
    </div>
  );
}

export default App;
