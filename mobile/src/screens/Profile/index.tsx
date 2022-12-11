import { Text, View } from 'react-native';
import { useAuth } from '../../hooks/auth';
import {
  Avatar,
  ButtonLogout,
  Container,
  Header,
  TextButton,
  ViewBody,
} from './styles';
import avatar from '../../assets/img/user.png';

export function Profile() {
  const { signOut, user } = useAuth();

  async function handleSignOut() {
    await signOut();
  }

  return (
    <Container>
      <Header>
        <Avatar
          source={avatar}
          resizeMode="cover"
          imageStyle={{ borderRadius: 100 }}
        />
        <TextButton>{user.username}</TextButton>
      </Header>
      <ViewBody>
        <Text style={{ fontWeight: 'bold' }}>Nome completo</Text>
        <Text>{user.name}</Text>
        <Text style={{ fontWeight: 'bold' }}>Email</Text>
        <Text>{user.email}</Text>
      </ViewBody>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ButtonLogout onPress={() => handleSignOut()}>
          <TextButton>Sair</TextButton>
        </ButtonLogout>
      </View>
    </Container>
  );
}
