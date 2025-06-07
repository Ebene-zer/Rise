import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React from 'react';
import { DashboardScreen } from './src/screens';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar style="light" />
      <WelcomeScreen />
    </View>
  );
}