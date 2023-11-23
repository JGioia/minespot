import React, { useEffect } from "react";

import './App.css';
import { HarvestPage } from "./harvest/HarvestPage";
import { useTimeMachine } from "./helpers/timemachine";
import { useDispatch } from "react-redux";
import { resetState } from "./redux/reducer";

function App() {
  useTimeMachine();

  return (
    <div className='page'>
      <div className='content'>
        <HarvestPage />
      </div>
    </div>
  );
}

export default App;
