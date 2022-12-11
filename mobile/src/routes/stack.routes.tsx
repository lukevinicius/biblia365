import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import theme from '../global/styles/theme';

import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primaryDark,
        },
        headerTintColor: '#fff',
      }}
    >
      <Screen
        name="Home"
        options={{
          headerShown: false,
          headerTitle: '',
        }}
        component={Home}
      />
      <Screen
        name="MonthDetails"
        component={Home}
        options={{
          headerTitle: 'Verificação de Email',
        }}
      />
    </Navigator>
  );
}
