import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../global/styles/theme';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { AppStackRoutes } from './stack.routes';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.primaryDark,
          borderTopColor: 'transparent',
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={36} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="user" size={36} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
