import { ReactElement } from 'react';
import './Overlay.css'
import PageButton from './PageButton';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/store';
import { Quantity } from '../components/Quantity';
import { Box } from '../components/Box';

const TopBar = () => {
  const money = useSelector((state: IRootState) => state.money);
  const earthCheese = useSelector((state: IRootState) => state.earthCheese);

  return (
    <div className='top-bar'>
      <span>
        <Quantity value={money} />
        <span> 💵</span>
      </span>
      <span>
        <Quantity value={earthCheese} />
        <span> 🧀</span>
      </span>
    </div>
  )
};

export const Overlay = 
    ({children}: {children: ReactElement}) => {
  return (
    <>
      <PageButton direction="left" />
      <PageButton direction='right' />
      <PageButton direction='up' />
      <PageButton direction='down' />
      <div className='overlay'>
        <TopBar />
        <Box className='subpage'>
          {children}
        </Box>
      </div>
    </>
  )
};