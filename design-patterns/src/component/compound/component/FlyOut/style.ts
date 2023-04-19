import styled from 'styled-components';

export const MoreItemsContainer = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;

export const MoreImageCanvas = styled.div`
  background-color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const MoreImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const MoreList = styled.ul`
  position: absolute;
  right: 80%;
  top: 120%;
  display: grid;
  grid-template-column: row;
`;

export const MoreItem = styled.li`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  background-color: #2b96ff;
  :hover {
    background-color: rgba(43, 150, 254, 0.7);
  }
`;
