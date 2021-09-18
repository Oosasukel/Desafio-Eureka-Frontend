import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const Container = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  width: 100%;
  height: 100%;
  max-width: 26rem;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Title = styled(motion.h1).attrs(() => ({
  variants: itemVariants,
}))`
  text-align: center;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled(motion.h1).attrs(() => ({
  variants: itemVariants,
}))`
  text-align: center;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;
