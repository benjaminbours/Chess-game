import React from 'react';
import './App.css';
import { Grid } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Grid />
      </div>
    </Provider>
  );
}

export default App;
