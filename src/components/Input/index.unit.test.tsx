import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { Input, InputProps } from '.';

describe('Componente Input', () => {
  it('textAlign should be left by default', () => {
    const { getByRole } = renderComponent({});

    const input = getByRole('textbox');

    expect(input).toHaveStyle('text-align: left');
  });

  it('should be possible to define textAlign', () => {
    const { getByRole } = renderComponent({ textAlign: 'center' });

    const input = getByRole('textbox');

    expect(input).toHaveStyle('text-align: center');
  });

  it('should not display icon if the icon prop is undefined', () => {
    const { queryByRole } = renderComponent({});

    const button = queryByRole('button');
    expect(button).toBeNull();
  });

  it('should not display icon if the icon prop is undefined', () => {
    const { getByRole } = renderComponent({ icon: '/my/icon/path' });

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should be possible disable icon click', () => {
    const { getByRole } = renderComponent({
      icon: '/my/icon/path',
      iconDisabled: true,
    });

    const button = getByRole('button');
    expect(button).toHaveStyle('opacity: 0.6');
  });
});

const renderComponent = (props: InputProps) =>
  render(
    <ThemeProvider theme={theme}>
      <Input {...props} />
    </ThemeProvider>
  );
