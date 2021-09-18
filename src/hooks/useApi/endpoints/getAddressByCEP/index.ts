import { AxiosInstance } from 'axios';
import { Address } from 'types/Address';

export const getAddressByCEP = (api: AxiosInstance, CEP: string) => {
  return api.get<Address>(`/api/addresses/${CEP}`);
};
