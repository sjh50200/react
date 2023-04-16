import React from 'react';
import { ImageDataType } from '../../common/type';
import * as S from './style';

export interface ImageBoxProps {
  children?: React.ReactNode | undefined;
  imageData: ImageDataType;
}

const ImageBox = (props: ImageBoxProps) => {
  return (
    <S.ImageBoxContainer backgroundImage={props.imageData.imageSrc}>
      {props.children}
    </S.ImageBoxContainer>
  );
};

export default ImageBox;
