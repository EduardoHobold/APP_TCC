import React from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Routes } from './src/routes';

import { LoadAnimation } from './src/components/LoadAnimation';

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
    return (
      <NativeBaseProvider theme={customTheme} config={customTheme.config}>
        <LoadAnimation />
      </NativeBaseProvider>
    )
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


