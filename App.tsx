import React from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { AuthProvider, useAuth } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const { userSotarageLoading } = useAuth();

  if (!fontsLoaded || userSotarageLoading) {
    return <AppLoading />
  } else {
    return (
      <NativeBaseProvider theme={theme.theme}>
        <StatusBar barStyle={'light-content'} />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NativeBaseProvider>
    );
  }

}


