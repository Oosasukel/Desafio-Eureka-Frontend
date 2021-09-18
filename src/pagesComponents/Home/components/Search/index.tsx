import { InputWithMask } from 'components/InputWithMask';
import { HomeContext } from 'pagesComponents/Home/Provider/Context';
import {
  KeyboardEvent,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import { removeSpecialCharacters } from 'utils/removeSpecialCharacters';
import * as S from './styles';

export const Search = () => {
  const { loading, getAddressByCEP } = useContext(HomeContext);
  const [invalidCEP, setInvalidCEP] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(() => {
    const inputValue = inputRef.current.value;
    const CEP = removeSpecialCharacters(inputValue);

    if (CEP.length !== 8) return setInvalidCEP(true);

    setInvalidCEP(false);
    getAddressByCEP(CEP);
  }, [getAddressByCEP]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <S.Form>
      <InputWithMask
        maskProps={{
          mask: '99999-999',
          maskChar: null,
        }}
        type='tel'
        ref={inputRef}
        placeholder='Informe o CEP'
        icon='/icons/search.svg'
        onKeyDown={handleKeyDown}
        textAlign='center'
        onIconClick={handleSearch}
        iconDisabled={loading}
      />

      {invalidCEP && (
        <S.ErrorMessage>CEP deve conter 8 dígitos.</S.ErrorMessage>
      )}
    </S.Form>
  );
};
