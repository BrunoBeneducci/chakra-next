import { Button, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
    text: string;
    route?: string;
}

export function PrimaryButton({ text, route, ...rest }: ButtonProps) {
    return (
        <Button 
            // bg="brand-primary.500"
            // _hover={{ backgroundColor: 'brand-primary.700' }}
            // _active={{ backgroundColor: 'brand-primary.700' }}
            // _focus={{ backgroundColor: 'brand-primary.50', color: 'brand-primary.700' }}
            // _visited={{ backgroundColor: 'brand-primary.700' }}
            colorScheme="pink"
        {...rest}>
            {text}
        </Button>
    )
}
