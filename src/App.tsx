import { useSelector } from 'react-redux';
import './App.css';
import { HarvestPage } from "./harvest/HarvestPage";
import { useTimeMachine } from "./helpers/timemachine";
import { Overlay } from './overlay/Overlay';
import { IRootState } from './redux/store';
import { CraftPage } from './craft/CraftPage';
import { GamblePage } from './gamble/GamblePage';
import { QuestPage } from './quest/QuestPage';
import { StockPage } from './stock/StockPage';

const Pages = () => {
  const page = useSelector((state: IRootState) => state.page);
  switch (page) {
    case 'harvest':
      return <HarvestPage />;
    case 'craft':
      return <CraftPage />;
    case 'gamble':
      return <GamblePage />;
    case 'quest':
      return <QuestPage />;
    case 'stock':
      return <StockPage />;
  }
}

function App() {
  useTimeMachine();

  return (
    <div className='page'>
      <div className='content'>
        <Overlay>
          <Pages />
        </Overlay>
      </div>
    </div>
  );
}

export default App;
