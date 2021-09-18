import useApi from 'hooks/useApi';
import { ReactNode, useCallback, useState } from 'react';
import { Address } from 'types/Address';
import { formatCEP } from 'utils';
import { HomeContext } from './Context';

interface HomeProviderProps {
  children: ReactNode;
}

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const { apiGetAddressByCEP } = useApi();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [address, setAddress] = useState<Address>(null);
  const [lastCEP, setLastCEP] = useState('');

  const getAddressByCEP = useCallback(
    async (CEP: string) => {
      if (CEP === lastCEP) return;

      setLoading(true);
      setLastCEP(CEP);
      setError('');

      try {
        const { data } = await apiGetAddressByCEP(CEP);
        setAddress(data);
      } catch (error) {
        if (error.response?.status === 404) {
          setError(`O CEP ${formatCEP(CEP)} não existe. 😦`);
        } else {
          setError('Houve um erro inesperado. 😰');
        }
      }

      setLoading(false);
    },
    [apiGetAddressByCEP, lastCEP]
  );

  return (
    <HomeContext.Provider
      value={{
        loading,
        error,

        address,

        getAddressByCEP,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
