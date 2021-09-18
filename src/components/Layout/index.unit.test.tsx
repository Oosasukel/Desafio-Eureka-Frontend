import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { Layout } from '.';

describe('Componente Layout', () => {
  it('should render children', () => {
    const { getByText } = renderComponent('child');

    expect(getByText('child')).toBeInTheDocument();
  });
});

const renderComponent = (children: string) =>
  render(
    <ThemeProvider theme={theme}>
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
