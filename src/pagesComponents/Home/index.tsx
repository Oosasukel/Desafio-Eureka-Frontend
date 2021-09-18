import { AddressCard } from './components/AddressCard';
import { Search } from './components/Search';
import { HomeProvider } from './Provider/Provider';
import * as S from './styles';

export const Home = () => {
  return (
    <HomeProvider>
      <S.Container>
        <S.Title>Encontre um CEP</S.Title>
        <S.Subtitle>
          Digite um CEP abaixo e obtenha todas as informações sobre ele.
        </S.Subtitle>

        <Search />
        <AddressCard />
      </S.Container>
    </HomeProvider>
  );
};
