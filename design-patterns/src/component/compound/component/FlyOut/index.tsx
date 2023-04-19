import React, { PropsWithChildren, useContext } from 'react';
import { createContext, useState } from 'react';
import { FlyOutContextType } from '../../common/type';
import * as S from './style';
import More from '../../../../assets/more.png';

export const FlyOutContext = createContext<FlyOutContextType>(null!);

const FlyOut = ({ children }: PropsWithChildren) => {
  const [open, toggle] = useState<boolean>(false);

  return (
    <FlyOutContext.Provider value={{ open, toggle }}>
      {children}
    </FlyOutContext.Provider>
  );
};

const Toggle = ({ children }: PropsWithChildren) => {
  const { open, toggle } = useContext(FlyOutContext);

  return (
    <S.MoreItemsContainer>
      <S.MoreImageCanvas onClick={() => toggle(!open)}>
        <S.MoreImage src={More} />
      </S.MoreImageCanvas>
      {children}
    </S.MoreItemsContainer>
  );
};

const List = ({ children }: PropsWithChildren) => {
  const { open } = useContext(FlyOutContext);
  return open ? <S.MoreList>{children}</S.MoreList> : null;
};

const Item = ({ children }: PropsWithChildren) => {
  return <S.MoreItem>{children}</S.MoreItem>;
};

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;

export default FlyOut;
