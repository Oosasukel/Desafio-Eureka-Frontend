import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from 'pagesComponents/Home';
import api from 'services/api';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { Address } from 'types/Address';

jest.mock('services/api');
const mockedApi = api as jest.Mocked<typeof api>;

const mockedAddress: Address = {
  cep: '18195-000',
  logradouro: '',
  complemento: '',
  bairro: '',
  localidade: 'Capela do Alto',
  uf: 'SP',
  ibge: '3510302',
  gia: '2525',
  ddd: '15',
  siafi: '6307',
};

describe('Page Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to search a CEP', async () => {
    mockedApi.get.mockResolvedValueOnce({ data: mockedAddress });

    const { getByRole } = renderComponent();

    const input = getByRole('textbox');
    userEvent.type(input, '18195000');
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => {
      const cardTitle = getByRole('heading', {
        name: /capela do alto, sp/i,
      });
      expect(cardTitle).toBeInTheDocument();
    });
  });

  it('should display not found error message if API returns 404', async () => {
    mockedApi.get.mockRejectedValue({ response: { status: 404 } });

    const { getByRole, getByText } = renderComponent();

    const input = getByRole('textbox');
    userEvent.type(input, '18195111');
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => {
      const errorMessage = getByText(/o cep 18195\-111 não existe\. 😦/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('should display generic error if API returns error other than 404', async () => {
    mockedApi.get.mockRejectedValue({ response: { status: 500 } });

    const { getByRole, getByText } = renderComponent();

    const input = getByRole('textbox');
    userEvent.type(input, '18195111');
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => {
      const errorMessage = getByText(/houve um erro inesperado. 😰/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('should not call API again if requested CEP is the same', async () => {
    mockedApi.get.mockResolvedValueOnce({ data: mockedAddress });

    const { getByRole } = renderComponent();

    const input = getByRole('textbox');
    userEvent.type(input, '18195000');
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(api.get).toBeCalledTimes(1);

    await waitFor(() => {
      const cardTitle = getByRole('heading', {
        name: /capela do alto, sp/i,
      });
      expect(cardTitle).toBeInTheDocument();
    });

    fireEvent.keyDown(input, { key: 'Enter' });

    expect(api.get).toBeCalledTimes(1);
  });

  it('should display error and not call api if CEP does not contains 8 digits', () => {
    const { getByRole, getByText } = renderComponent();

    const input = getByRole('textbox');
    userEvent.type(input, '123');
    fireEvent.keyDown(input, { key: 'Enter' });

    const errorMessage = getByText(/cep deve conter 8 dígitos\./i);

    expect(errorMessage).toBeInTheDocument();
    expect(api.get).not.toBeCalled();
  });

  it('should display "--" in empty fields', async () => {
    mockedApi.get.mockResolvedValueOnce({
      data: {
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        ibge: '',
        gia: '',
        ddd: '',
        siafi: '',
      },
    });

    const { getByRole, getByText } = renderComponent();

    const input = getByRole('textbox');
    userEvent.type(input, '18195000');
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => {
      expect(getByText(/bairro/i)).toBeInTheDocument();
    });

    const valueElement = getByText(/bairro/i).nextSibling;
    expect(valueElement.textContent).toBe('--');
  });
});

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
