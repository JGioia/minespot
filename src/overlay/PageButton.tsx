import { useDispatch, useSelector } from 'react-redux';
import './PageButton.css'
import { IRootState } from '../redux/store';
import { setPage } from '../redux/reducer';
import { useCallback, useMemo } from 'react';

type PageButtonProps = {
  direction: 'left' | 'right' | 'up' | 'down'
};

const PageButton = ({direction}: PageButtonProps) => {
  const page = useSelector((state: IRootState) => state.page);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    switch (direction) {
      case 'left':
        if (page === 'harvest') {
          dispatch(setPage('quest'));
        } else if (page === 'stock') {
          dispatch(setPage('harvest'));
        }
        break;
      case 'right':
        if (page === 'harvest') {
          dispatch(setPage('stock'));
        } else if (page === 'quest') {
          dispatch(setPage('harvest'));
        }
        break;
      case 'up':
        if (page === 'harvest') {
          dispatch(setPage('craft'));
        } else if (page === 'gamble') {
          dispatch(setPage('harvest'));
        }
        break;
      case 'down':
        if (page === 'harvest') {
          dispatch(setPage('gamble'));
        } else if (page === 'craft') {
          dispatch(setPage('harvest'));
        }
        break;
    }
  }, [page, dispatch, direction]);

  const arrowEmoji = useMemo(() => {
    switch (direction) {
      case 'left':
        return '←';//⬅️';
      case 'right':
        return '→'//➡️';
      case 'up':
        return '↑';//⬆️';
      case 'down':
        return '↓'//⬇️';
    }
  }, [direction]);

  const showButton = useMemo(() => (
    (page === 'harvest') ||
    (page === 'craft' && direction === 'down') ||
    (page === 'gamble' && direction === 'up') ||
    (page === 'quest' && direction === 'right') ||
    (page === 'stock' && direction === 'left')
  ), [page, direction]);

  return showButton ?(
    <div className={`page-button page-button-${direction}`} onClick={onClick}>
      {arrowEmoji}
    </div>
  ) : null
};

export default PageButton