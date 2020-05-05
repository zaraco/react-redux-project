import React from 'react';
import './App.css';
import MobContainer from "./Component/MobContainer";
import {Provider} from "react-redux";
import store from "./Redux/Store";

function App() {
  return (
      <Provider store={store}>

          <div className="App">

              <MobContainer/>

          </div>

      </Provider>

  );
}

export default App;
