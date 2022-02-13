import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';

export function Routes() {
  const user = false;
  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
