import { createContext } from 'react';
import { Address } from 'types/Address';

export interface HomeContextProps {
  loading: boolean;
  error: string;

  address: Address | null;

  getAddressByCEP: (CEP: string) => void;
}

export const HomeContext = createContext({} as HomeContextProps);
