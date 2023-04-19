import styled, { css } from 'styled-components';

export const ImageBoxContainer = styled.div<{ backgroundImage: string }>`
  width: calc(16rem * 1.5);
  height: calc(9rem * 1.5);
  border-radius: 1rem;
  position: relative;

  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `};
`;
