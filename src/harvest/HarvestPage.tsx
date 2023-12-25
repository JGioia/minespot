import { useSelector, useDispatch } from 'react-redux';
import { resetState, setEarthCheese, setMoney, setWorkers } from '../redux/reducer';
import { IRootState } from "../redux/store";

import './HarvestPage.css';
import { Quantity } from '../components/Quantity';
import { useCallback, useMemo } from 'react';
import { Button } from '../components/Button';
import { Stack } from '../components/Stack';
import { Factories } from './Factories';

export const HarvestPage = () => {
  const money = useSelector((state: IRootState) => state.money);
  const workers = useSelector((state: IRootState) => state.workers);
  const earthCheese = useSelector((state: IRootState) => state.earthCheese);
  const dispatch = useDispatch();

  const nextWorkerCost = useMemo(() => (workers + 2) * 3, [workers]);
  const hireWorkerDisabled = useMemo(() => nextWorkerCost > money, [nextWorkerCost, money]);
  const sellCheeseDisabled = useMemo(() => earthCheese < 1, [earthCheese]);
  const sellCheesePrice = 2;

  const hireWorker = useCallback(() => {
    dispatch(setWorkers(workers + 1));
    dispatch(setMoney(money - nextWorkerCost));
  }, [dispatch, workers, money, nextWorkerCost]);

  const sellCheese = useCallback(() => {
    dispatch(setMoney(money + earthCheese * sellCheesePrice));
    dispatch(setEarthCheese(0));
  }, [dispatch, money, earthCheese, sellCheesePrice]);

  const restartGame = useCallback(
    () => dispatch(resetState()),
    [dispatch]
  );

  return (
    <Stack className='harvest-page'>
      <Factories />
      <Button onClick={hireWorker} disabled={hireWorkerDisabled}>
        Hire 🐀 - ${nextWorkerCost}
      </Button>
      <span>
        <span>workers: </span>
        <Quantity value={workers} />
      </span>
      <Button onClick={sellCheese} disabled={sellCheeseDisabled}>
        Sell 🧀 - ${sellCheesePrice} / cheese
      </Button>
      <Button onClick={restartGame}>Reset</Button>
    </Stack>
  )
};