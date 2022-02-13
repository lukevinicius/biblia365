import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.username ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
