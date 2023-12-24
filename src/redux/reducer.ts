import { createSlice } from '@reduxjs/toolkit';

type Page = 'harvest' | 'craft' | 'gamble' | 'quest' | 'stock';

const initialState = {
  earthCheese: 0,
  money: 0,
  workers: 0,
  prevTime: 0, // in seconds
  curTime: 0, // in seconds
  tick: 0,
  page: ('harvest' as Page),
  list1Quest: 0,
  list2Quest: 0, 
};

export const reducerSlice = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    resetState: (state) => {
      state.earthCheese = initialState.earthCheese;
      state.money = initialState.money;
      state.workers = initialState.workers;
      state.prevTime = initialState.prevTime;
      state.curTime = initialState.curTime;
      state.tick = initialState.tick;
      state.list1Quest = initialState.list1Quest;
      state.list2Quest = initialState.list2Quest;
    },
    setMoney: (state, action) => {
      state.money = action.payload;
    },
    setWorkers: (state, action) => {
      state.workers = action.payload;
    },
    setEarthCheese: (state, action) => {
      state.earthCheese = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    incrementTime: (state, action) => {
      const deltaTime = action.payload;
      state.prevTime = state.curTime;
      state.curTime = state.curTime + deltaTime;
      state.tick += 1;
    },
    incrementQuest1: (state) => {
      state.list1Quest += 1;
    },
    incrementQuest2: (state) => {
      state.list2Quest += 1;
    }
  },
});

// Action creators are generated for each case reducer function
export const { 
  resetState, 
  setMoney, 
  setWorkers, 
  incrementTime,
  setEarthCheese,
  setPage,
  incrementQuest1,
  incrementQuest2
} = reducerSlice.actions

export default reducerSlice.reducer