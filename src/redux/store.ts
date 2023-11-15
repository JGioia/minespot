import { configureStore } from '@reduxjs/toolkit'
import counter from './counter'

import { combineReducers } from 'redux';

const reducer = combineReducers({money: counter});

const store = configureStore({reducer});

export default store;

export type IRootState = ReturnType<typeof reducer>;