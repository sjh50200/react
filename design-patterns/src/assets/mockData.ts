import Image1 from './silver-grass.webp';
import Image2 from './nami-island.webp';
import Image3 from './jeju.webp';

export type ImageDatasType = {
  imageId: number;
  imageSrc: string;
};

export const ImageDatas: Array<ImageDatasType> = [
  {
    imageId: 1,
    imageSrc: Image1,
  },
  {
    imageId: 2,
    imageSrc: Image2,
  },
  {
    imageId: 3,
    imageSrc: Image3,
  },
];
