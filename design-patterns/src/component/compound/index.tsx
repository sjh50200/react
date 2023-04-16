import React from 'react';
import { ImageDatas } from '../../assets/mockData';
import FlyOutMenu from './component/FlyOutMenu';
import ImageBox from './component/ImageBox';

const Compound = () => {
  return (
    <ImageBox imageData={ImageDatas[0]}>
      <FlyOutMenu />
    </ImageBox>
  );
};

export default Compound;
