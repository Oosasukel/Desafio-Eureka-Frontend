import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: auto;
`;
