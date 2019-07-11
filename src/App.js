import React from 'react';
import './App.css';
import ContainedButtons from './Component/button';
import ButtonAppBar from "./Component/navbar"

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <ContainedButtons/>
    </div>
  );
}

export default App;
