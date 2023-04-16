import React from 'react';
import styled from 'styled-components';
import { ImageDatas } from '../../assets/mockData';
import FlyOutMenu from './component/FlyOutMenu';
import ImageBox from './component/ImageBox';

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

const Compound = () => {
  return (
    <StyledMain>
      <ImageBox imageData={ImageDatas[0]}>
        <FlyOutMenu />
      </ImageBox>
    </StyledMain>
  );
};

export default Compound;
