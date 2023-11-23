import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMoney, setWorkers } from '../redux/reducer';
import { IRootState } from "../redux/store";

export const HarvestPage = () => {
  const money = useSelector((state: IRootState) => state.money);
  const workers = useSelector((state: IRootState) => state.workers);
  const dispatch = useDispatch();

  const clickCookie = () => dispatch(setMoney(money + 1));
  const hireWorker = () => dispatch(setWorkers(workers + 1));
  const fireWorker = () => dispatch(setWorkers(workers - 1));

  return (
    <div>
      <button onClick={clickCookie}>click cookie</button>
      <button onClick={hireWorker}>hireWorker</button>
      <button onClick={fireWorker}>fireWorker</button>
      <div>money: {money}</div>
      <div>workers: {workers}</div>
    </div>
  )
};