import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Form = styled(motion.form).attrs(() => ({
  variants: itemVariants,
}))`
  width: 100%;
  margin-bottom: 4rem;
`;

const errorMessageVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const ErrorMessage = styled(motion.span).attrs(() => ({
  variants: errorMessageVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  display: block;
  font-size: 1.5rem;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.danger};
  margin-top: 0.5rem;
`;
