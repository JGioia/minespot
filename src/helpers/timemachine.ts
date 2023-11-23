import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from "../redux/store";
import { useCallback, useEffect, useRef } from 'react';
import { incrementTime, setMoney, setWorkers } from '../redux/reducer';

const TICK_LENGTH = 0.1;

const useTimeUpdater = () => {
  const dispatch = useDispatch();

  return useCallback((deltaTime: number) => {
    dispatch(incrementTime(deltaTime));
  }, [dispatch]);
};

const startWorking = 
    (updateTime: (deltaTime: number) => void) => {
  const intevalId = setInterval(() => updateTime(TICK_LENGTH), 
    TICK_LENGTH * 1000);
  return () => clearInterval(intevalId);
};

const useWork = () => {
  const dispatch = useDispatch();
  const workers = useSelector((state: IRootState) => state.workers);
  const money = useSelector((state: IRootState) => state.money);
  const prevTime = useSelector((state: IRootState) => state.prevTime);
  const curTime = useSelector((state: IRootState) => state.curTime);

  const doWork = useRef(() => undefined);

  // NOTE: The call order of these 2 use effects actually matters D:
  // This is the ugliest code I've every written
  useEffect(() => {
    doWork.current = () => {
      const deltaTime = curTime - prevTime;
      const deltaMoney = workers * deltaTime;
      
      dispatch(setMoney(money + deltaMoney));
      return undefined;
    };
  }, [dispatch, workers, money, prevTime, curTime]);

  useEffect(() => {
    doWork.current();
  }, [curTime]);
};

export const useTimeMachine = () => {
  useWork();

  const updateTime = useTimeUpdater();
  useEffect(() => {
    const stopWorking = startWorking(updateTime);
    return stopWorking;
  }, [updateTime]);
};