import { ReactElement } from 'react';
import './Overlay.css'
import PageButton from './PageButton';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/store';
import { Quantity } from '../components/Quantity';

const TopBar = () => {
  const money = useSelector((state: IRootState) => state.money);
  const earthCheese = useSelector((state: IRootState) => state.earthCheese);

  return (
    <div className='top-bar'>
      <span>
        <span>Money: </span>
        <Quantity value={money} />
      </span>
      <span>
        <span>Earth cheese: </span>
        <Quantity value={earthCheese} />
      </span>
    </div>
  )
};

export const Overlay = 
    ({children}: {children: ReactElement}) => {
  return (
    <>
      <div className='overlay'>
        <TopBar />
        <div>
          {children}
        </div>
      </div>
      <PageButton direction="left" />
      <PageButton direction='right' />
      <PageButton direction='up' />
      <PageButton direction='down' />
    </>
  )
};