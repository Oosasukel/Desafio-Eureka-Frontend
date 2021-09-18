import { render } from '@testing-library/react';
import Head from '.';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe('Componente Head', () => {
  it('should render title prop', () => {
    const title = 'meu título';

    render(<Head title={title} />, {
      container: document.head,
    });

    expect(document.title).toBe(title);
  });
});
