import { render } from '@testing-library/react';
import { PageComponent404 } from 'pagesComponents/404';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

describe('Page Home', () => {
  it('should match snapshot', async () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <PageComponent404 />
    </ThemeProvider>
  );
