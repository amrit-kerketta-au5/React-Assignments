import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
     <ClassComponent/>
     <FunctionalComponent/>
    </div>
  );
}

export default App;
