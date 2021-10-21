import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export const Input = ({ name, label, ...rest }: InputProps) => {
    return (
        <FormControl>

            {
                label ? (
                    <FormLabel htmlFor="email">{label}</FormLabel>
                ) : ''
            }

            <ChakraInput
            id="email"
            placeholder="Seu email"
            bg="#fff"
            color="#000"
            focusBorderColor="brand-primary.100"
            _placeholder={{ color: '#2E4254' }}
            size="lg"
            {...rest}
            />

        </FormControl>
    )
}
