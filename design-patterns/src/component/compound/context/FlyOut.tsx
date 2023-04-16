import React, { PropsWithChildren, useContext } from 'react';
import { createContext, useState } from 'react';
import { FlyOutContextType } from '../common/type';

export const FlyOutContext = createContext<FlyOutContextType>(null!);

const FlyOut = ({ children }: PropsWithChildren) => {
  const [open, toggle] = useState<boolean>(false);

  return (
    <FlyOutContext.Provider value={{ open, toggle }}>
      {children}
    </FlyOutContext.Provider>
  );
};

const Toggle = () => {
  const { open, toggle } = useContext(FlyOutContext);

  return <div onClick={() => toggle(!open)}>click me</div>;
};

const List = ({ children }: PropsWithChildren) => {
  const { open } = useContext(FlyOutContext);
  return open ? <ul>{children}</ul> : null;
};

const Item = ({ children }: PropsWithChildren) => {
  return <li>{children}</li>;
};

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;

export default FlyOut;
