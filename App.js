import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React from 'react';
import AppStack from './Navgation/AppStack';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar style="light" />
      <AppStack/>
    </View>
  );
}