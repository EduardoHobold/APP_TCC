import { extendTheme } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export const customTheme = extendTheme({
    colors: {
        primary: {
            default: '#6a1b9a',
            light: '#9c4dcc',
            dark: '#38006b'
        },
        secondary: {
            default: '#009688',
            light: '#A8F4EA',
            dark: '#00675b'
        },
        title: '#363F5F',
        text: '#FFF',
        text_dark: '#000',
        backgroud: '#F0F2F5',
        backgroud2: '#AFB6B5',
    },
    fonts: {
        regular: 'Poppins_400Regular',
        medium: 'Poppins_500Medium',
        bold: 'Poppins_700Bold'
    },
    config: {
        dependencies: {
            'linear-gradient': LinearGradient
        }
    }
});

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
    interface ICustomTheme extends CustomThemeType { }
}