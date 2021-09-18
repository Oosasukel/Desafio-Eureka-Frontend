import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import { forwardRef } from 'react';
import { Input, InputProps } from 'components/Input';

interface MaskProps extends InputMaskProps {
  maskChar: string;
}

export interface InputWithMaskProps extends InputProps {
  maskProps: MaskProps;
}

export const InputWithMask = forwardRef<HTMLInputElement, InputWithMaskProps>(
  ({ maskProps, ...rest }, ref) => (
    <InputMask {...maskProps}>
      {(props) => <Input ref={ref} {...rest} {...props} />}
    </InputMask>
  )
);

InputWithMask.displayName = 'InputWithMask';
