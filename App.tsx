import React from 'react';
import { NativeBaseProvider } from 'native-base';

import { SignIn } from './src/pages/SignIn';

export default function App() {
  return (
    <NativeBaseProvider>
      <SignIn />
    </NativeBaseProvider>
  );
}


