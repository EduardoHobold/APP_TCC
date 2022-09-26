import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TCC HEHE =)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#085085',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  }
});
