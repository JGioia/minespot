import React from 'react';

import './Overlay.css'
import PageButton from './PageButton';

const Overlay = () => {
  return (
    <div>
      <PageButton direction="left" />
      <PageButton direction='right' />
      <PageButton direction='up' />
      <PageButton direction='down' />
    </div>
  )
};

export default Overlay;