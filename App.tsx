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

import { AuthProvider, useAuth } from './src/hooks/auth';
import { customTheme } from './src/global/styles/theme';

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
      <NativeBaseProvider theme={customTheme} config={customTheme.config}>
        <StatusBar barStyle={'light-content'} />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NativeBaseProvider>
    );
  }

}


