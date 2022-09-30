import { extendTheme } from 'native-base';

export default {
    theme: extendTheme({
        colors: {
            primary: {
                default: '#1d4fd7',
                light: '#93c5fd'
            },
            secondary: {
                default: '#f68c13',
                light: '#fef08a'
            },
            title: '#363F5F',
            text: '#969CB2'

        },
        config: {
            initialColorMode: 'light'
        },
        fonts: {
            regular: 'Poppins_400Regular',
            medium: 'Poppins_500Medium',
            bold: 'Poppins_700Bold'
        }
    })
}
