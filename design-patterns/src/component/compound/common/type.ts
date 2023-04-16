import { SetStateAction } from 'react';

export interface FlyOutContextType {
  open: boolean;
  toggle: React.Dispatch<SetStateAction<boolean>>;
}
