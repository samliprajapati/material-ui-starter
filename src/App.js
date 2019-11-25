import React from 'react';
import './App.css';
import NavBar from "./Component/navbar"
import Drawer from "./Component/Drawer/Drawer"
import Main from "./Component/main"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Drawer />
      <Main />

    </div>
  );
}

export default App;
