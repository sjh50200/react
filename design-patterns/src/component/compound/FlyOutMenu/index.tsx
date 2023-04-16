import React from 'react';
import FlyOut from '../context/FlyOut';

const FlyOutMenu = () => {
  return (
    <FlyOut>
      <FlyOut.Toggle />
      <FlyOut.List>
        <FlyOut.Item>Edit</FlyOut.Item>
        <FlyOut.Item>Delete</FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  );
};

export default FlyOutMenu;
