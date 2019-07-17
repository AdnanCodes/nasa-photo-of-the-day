import React, { useState }from "react";
import "./App.css";
import Card from './components/card.js'
import AcquireData from './components/data'

function App() {

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Card />
      <AcquireData />
    </div>
    
  );
}

export default App;
