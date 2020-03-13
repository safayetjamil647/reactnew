import React from 'react';
import First from './First'
import Counter from './Counter'
import './App.css';

function App() {
  const msg="wfdsdsad";
  return (
    
    <div className="App">
      <p>{msg}</p>
      <First name="ami"email="tumi" address="sei"/>
      <First name="tumi"email="tami" address="job"/>
      <Counter/>
    </div>
  );
}

export default App;
