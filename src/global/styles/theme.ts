import { extendTheme } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export default {
    theme: extendTheme({
        colors: {
            primary: {
                default: '#6a1b9a',
                light: '#9c4dcc',
                dark: '#38006b'
            },
            secondary: {
                default: '#009688',
                light: '#52c7b8',
                dark: '#00675b'
            },
            title: '#363F5F',
            text: '#FFF',
            text_dark: '#000'

        },
        fonts: {
            regular: 'Poppins_400Regular',
            medium: 'Poppins_500Medium',
            bold: 'Poppins_700Bold'
        }
    }),
    config: {
        dependencies: {
            'linear-gradient': LinearGradient
        }
    }
}
