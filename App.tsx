import React from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import { SignIn } from './src/pages/SignIn';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={'light-content'} />
      <SignIn />
    </NativeBaseProvider>
  );
}


