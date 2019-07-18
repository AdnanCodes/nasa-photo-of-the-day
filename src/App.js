import React from "react";
import "./App.css";
import AcquireData from './components/data'

function App() {

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="Rocket">🚀</span>!
      </p>
      <AcquireData />
    </div>
    
  );
}

export default App;
