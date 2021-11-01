import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
    nameText: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ nameText, label, error, ...rest}, ref) => {
    return (
        <FormControl isInvalid={!!error}>

            {
                label ? (
                    <FormLabel htmlFor={nameText}>{label}</FormLabel>
                ) : ''
            }

            <ChakraInput
                name={nameText}
                id={nameText}
                placeholder={label}
                bg="#fff"
                color="#000"
                focusBorderColor="brand-primary.100"
                _placeholder={{ color: '#2E4254' }}
                size="lg"
                ref={ref}
                {...rest}
            />

            <FormErrorMessage>
                {error?.message}
            </FormErrorMessage>

        </FormControl>
    )
}

export const Input = forwardRef(InputBase);