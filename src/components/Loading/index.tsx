import loadingAnimation from 'assets/lotties/loading.json';
import Lottie from 'react-lottie';
import * as S from './styles';

export const Loading = (props) => {
  return (
    <S.AnimationWrapper {...props}>
      <Lottie options={{ animationData: loadingAnimation }} />
    </S.AnimationWrapper>
  );
};
