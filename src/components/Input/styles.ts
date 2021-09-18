import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

interface InputProps {
  textAlign: 'center' | 'left' | 'right';
  withIcon?: boolean;
}

export const StyledInput = styled.input<InputProps>`
  font-size: 2rem;
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;

  padding: 0.5rem 1rem;

  background-color: transparent;
  border: none;
  border-bottom: 0.125rem solid ${({ theme }) => theme.colors.primary};

  outline: none;

  ${({ withIcon }) => {
    if (withIcon) {
      return css`
        padding-right: 3rem;
      `;
    }
  }}
`;

interface IconProps {
  disabled: boolean;
}

export const Icon = styled(SVG)<IconProps>`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);

  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};

  width: 2.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
  min-height: 2.5rem;

  transition: transform 0.2s, opacity 0.2s;

  path {
    fill: ${({ theme }) => theme.colors.primary};
  }

  ${({ disabled }) => {
    if (disabled) {
      return css`
        opacity: 0.6;
      `;
    } else {
      return css`
        &:hover {
          transform: scale(1.2) translateY(-40%);
        }

        &:active {
          transform: translateY(-50%);
        }
      `;
    }
  }}
`;
