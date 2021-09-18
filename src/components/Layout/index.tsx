import { ReactNode } from 'react';
import * as S from './styles';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <S.Container>{children}</S.Container>;
};
