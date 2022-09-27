import { extendTheme } from 'native-base';

export default {
    theme: extendTheme({
        colors: {
            primary: {
                50: '#E3F2F9',
                100: '#C5E4F3',
                200: '#A2D4EC',
                300: '#7AC1E4',
                400: '#47A9DA',
                500: '#0088CC',
                600: '#007AB8',
                700: '#006BA1',
                800: '#005885',
                900: '#003F5E',
            },
            secondary: {
                400: '#d97706',
            }
        },
        config: {
          initialColorMode: 'light'
        }
    })
}