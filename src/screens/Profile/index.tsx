import { useAuth } from '../../hooks/auth';
import { DivText } from '../SignIn/styles';
import { TextDirection } from '../SignUp/styles';

export function Profile() {
  const { signOut, user } = useAuth();

  async function handleSignOut() {
    await signOut();
  }

  return (
    <>
      <DivText>{user.username}</DivText>
      <DivText>Email</DivText>
      <DivText>Nome</DivText>
      <TextDirection onPress={() => handleSignOut()}>
        <DivText>Sair</DivText>
      </TextDirection>
    </>
  );
}
