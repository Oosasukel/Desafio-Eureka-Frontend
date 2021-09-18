import notFoundAnimation from 'assets/lotties/not-found-ghost.json';
import Lottie from 'react-lottie';
import * as S from './styles';

export const PageComponent404 = () => {
  return (
    <S.Container>
      <S.AnimationWrapper>
        <Lottie options={{ animationData: notFoundAnimation }} />
      </S.AnimationWrapper>
    </S.Container>
  );
};
