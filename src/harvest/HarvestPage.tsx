import { useSelector, useDispatch } from 'react-redux';
import { resetState, setEarthCheese, setMoney, setWorkers } from '../redux/reducer';
import { IRootState } from "../redux/store";

import './HarvestPage.css';
import { Quantity } from '../components/Quantity';

export const HarvestPage = () => {
  const money = useSelector((state: IRootState) => state.money);
  const workers = useSelector((state: IRootState) => state.workers);
  const earthCheese = useSelector((state: IRootState) => state.earthCheese);
  const dispatch = useDispatch();

  const clickCookie = () => dispatch(setMoney(money + 1));
  const hireWorker = () => dispatch(setWorkers(workers + 1));
  const fireWorker = () => dispatch(setWorkers(workers - 1));
  const sellCheese = () => {
    dispatch(setMoney(money + earthCheese));
    dispatch(setEarthCheese(0));
  };
  const restartGame = () => dispatch(resetState());

  return (
    <div className='harvest-page'>
      <button onClick={clickCookie}>Click cookie</button>
      <button onClick={hireWorker}>Hire Worker</button>
      <button onClick={fireWorker}>Fire Worker</button>
      <button onClick={sellCheese}>Sell Cheese</button>
      <button onClick={restartGame}>Reset</button>
      <span>
        <span>workers: </span>
        <Quantity value={workers} />
      </span>
    </div>
  )
};