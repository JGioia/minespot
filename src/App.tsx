import './App.css';
import { HarvestPage } from "./harvest/HarvestPage";
import { useTimeMachine } from "./helpers/timemachine";
import { Overlay } from './overlay/Overlay';

function App() {
  useTimeMachine();

  return (
    <div className='page'>
      <div className='content'>
        <Overlay>
          <HarvestPage />
        </Overlay>
      </div>
    </div>
  );
}

export default App;
