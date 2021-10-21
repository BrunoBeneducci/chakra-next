import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        'brand-primary': {
            50: "#a9c8ff",
            100: '#77A9FF',
            200: '#3881FF',
            300: '#005DFF',
            400: '#0247BE',
            500: '#002D7A',
            600: "#002361",
            700: "#001a47",
            800: "#00112e",
            900: "#000714",
        },
    },
    fonts: {
        heading: 'Archivo',
        body: 'Archivo',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})