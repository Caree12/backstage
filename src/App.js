import React from 'react';
import MainContainer from './components/Main/MainContainer';
// import logo from './../../static/imgs/logo.svg';
import './static/styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> What's the diff</h1>
        <p>Enter any whole number to see the absolute difference between it's sequential addition then squaring and it's squaring then summation.</p>
      </header>
      <main>
        <MainContainer />
      </main>
    </div>
  );
}

export default App;
