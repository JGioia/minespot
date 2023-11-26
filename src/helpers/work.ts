import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { IRootState } from "../redux/store";
import { setEarthCheese } from "../redux/reducer";

export const work = (
  dispatch: Dispatch<AnyAction>,
  state: IRootState,
  deltaTime: number,
) => {
  const {workers, earthCheese} = state;
  
  const deltaEarthCheese = workers * deltaTime;
  dispatch(setEarthCheese(earthCheese + deltaEarthCheese));
}