import { useCallback } from 'react';
import api from 'services/api';
import { getAddressByCEP } from './endpoints';

const useApi = () => {
  const apiGetAddressByCEP = useCallback(
    (CEP: string) => getAddressByCEP(api, CEP),
    []
  );

  return {
    apiGetAddressByCEP,
  };
};

export default useApi;
