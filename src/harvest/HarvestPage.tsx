import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/counter';
import { IRootState } from "../redux/store";

export const HarvestPage = () => {
  const money = useSelector((state: IRootState) => state.money.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>click cookie</button>
      <div>{money}</div>
    </div>
  )
};