import { SetStateAction } from 'react';

export interface FlyOutContextType {
  open: boolean;
  toggle: React.Dispatch<SetStateAction<boolean>>;
}

export interface ImageDataType {
  imageId: number;
  imageSrc: string;
}
