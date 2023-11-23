import './App.css';
import { HarvestPage } from "./harvest/HarvestPage";
import { useTimeMachine } from "./helpers/timemachine";

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
