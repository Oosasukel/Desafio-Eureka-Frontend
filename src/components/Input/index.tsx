import { CSSProperties, forwardRef, InputHTMLAttributes } from 'react';
import * as S from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  textAlign?: 'center' | 'left' | 'right';
  styles?: CSSProperties;
  onIconClick?: () => void;
  iconDisabled?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { icon, textAlign = 'left', style, onIconClick, iconDisabled, ...rest },
    ref
  ) => (
    <S.Container style={style}>
      <S.StyledInput
        ref={ref}
        textAlign={textAlign}
        withIcon={!!icon}
        {...rest}
      />
      {!!icon && (
        <S.Icon
          role='button'
          src={icon}
          disabled={iconDisabled}
          onClick={!iconDisabled ? onIconClick : undefined}
        />
      )}
    </S.Container>
  )
);

Input.displayName = 'Input';
