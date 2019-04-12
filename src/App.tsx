import React, { useState } from 'react';
import './App.css';
import { Grid } from "./components/Grid";
import { initialState } from "./initialState";
import { IPieceData } from "./types";

// TODO LATE: History of the game
function App() {
  const [state, setState] = useState<IPieceData[]>(initialState);
  return (
    <div className="App">
      <Grid state={state} />
    </div>
  );
}

export default App;
