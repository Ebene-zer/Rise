import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardScreen } from '../screens';

export default function AppTabs() {
const Tab = createBottomTabNavigator();
  return (
   <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000', borderTopWidth: 0 },
          tabBarActiveTintColor: '#ff0000',
          tabBarInactiveTintColor: '#fff',
        }}
        initialRouteName="Dashboard"
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen}  options={
          { 
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../assets/home.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#ff0000' : '#fff',
                }}
              />
            ),
          }}/>

      </Tab.Navigator>
      </>
  )
}

const styles = StyleSheet.create({})