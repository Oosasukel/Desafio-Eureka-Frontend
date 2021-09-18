import { HomeContext } from 'pagesComponents/Home/Provider/Context';
import { useContext } from 'react';
import * as S from './styles';

export const AddressCard = () => {
  const { address, loading, error } = useContext(HomeContext);

  if (error) return <S.ErrorMessage>{error}</S.ErrorMessage>;
  if (loading) return <S.Loading />;

  if (!address) return null;

  return (
    <S.Container>
      <S.Content>
        <S.CardHeader>
          <S.City>
            <span>{address.cep || '--'}</span>
            <h1>
              {address.localidade || '--'}, {address.uf || '--'}
            </h1>
          </S.City>
          <S.DDD>
            <S.ItemLabel>DDD</S.ItemLabel>
            <S.TextDDD>{address.ddd || '--'}</S.TextDDD>
          </S.DDD>
        </S.CardHeader>

        <S.Item>
          <S.ItemLabel>Logradouro</S.ItemLabel>
          <S.ItemValue>{address.logradouro || '--'}</S.ItemValue>
        </S.Item>

        <S.Item>
          <S.ItemLabel>Bairro</S.ItemLabel>
          <S.ItemValue>{address.bairro || '--'}</S.ItemValue>
        </S.Item>

        <S.Item>
          <S.ItemLabel>Complemento</S.ItemLabel>
          <S.ItemValue>{address.complemento || '--'}</S.ItemValue>
        </S.Item>
      </S.Content>
    </S.Container>
  );
};
