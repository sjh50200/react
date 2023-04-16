import styled, { css } from 'styled-components';

export const ImageBoxContainer = styled.div<{ backgroundImage: string }>`
  border: 1px solid black;
  width: calc(16rem * 1.5);
  height: calc(9rem * 1.5);
  border-radius: 1rem;
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `};
`;
