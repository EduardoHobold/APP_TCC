import React from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';

import { Home } from './src/pages/Home';

import theme from './src/global/styles/theme';

import { AuthProvider, useAuth } from './src/hooks/auth';

export default function App() {
  const { userSotarageLoading } = useAuth();

  if (userSotarageLoading) {
    return <AppLoading />
  }

  return (
    <NativeBaseProvider theme={theme.theme}>
      <StatusBar barStyle={'light-content'} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NativeBaseProvider>
  );
}


