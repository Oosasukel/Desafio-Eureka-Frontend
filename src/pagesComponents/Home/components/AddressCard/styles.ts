import styled from 'styled-components';
import { Loading as LoadingComponent } from 'components/Loading';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Container = styled(motion.div).attrs(() => ({
  variants: itemVariants,
}))`
  width: 100%;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.75rem;
`;

const contentVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const Content = styled(motion.div).attrs(() => ({
  variants: contentVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
`;

export const CardHeader = styled(motion.header).attrs(() => ({
  variants: itemVariants,
}))`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: 1rem;
`;

export const Loading = styled(LoadingComponent)`
  width: 10rem;
`;

export const City = styled.div`
  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const DDD = styled.div`
  align-self: flex-end;
`;

export const TextDDD = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Item = styled(motion.div).attrs(() => ({
  variants: itemVariants,
}))`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ItemLabel = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export const ItemValue = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ErrorMessage = styled.span`
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;
