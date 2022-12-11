import { useNavigation } from '@react-navigation/native';

import {
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  Button,
  DivForm,
  DivText,
  DivTitle,
  Input,
  TextDirection,
  Title,
} from './styles';
import wallpaper from '../../assets/img/wallpaper1.jpg';

export function SignUp() {
  const navigation = useNavigation();

  function handleSignIn() {
    // Fazer o resgistro do usuário, usuário e senha não podem estar vazios
  }

  return (
    <ImageBackground source={wallpaper} resizeMode="cover" style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <DivTitle>
            <Title>Resgistrar-se</Title>
          </DivTitle>
          <DivForm>
            <DivText style={{ fontSize: 18, textAlign: 'left' }}>
              Nome de usuário
            </DivText>
            <Input
              placeholder="Username"
              placeholderTextColor="#FFFFFF"
              autoCorrect={false}
              autoCapitalize="none"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255, 255, 255, 0.48)',
              }}
            />
            <DivText style={{ fontSize: 18, marginTop: 20, textAlign: 'left' }}>
              Email
            </DivText>
            <Input
              placeholder="Email"
              placeholderTextColor="#FFFFFF"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255, 255, 255, 0.48)',
              }}
            />
            <DivText style={{ fontSize: 18, marginTop: 20, textAlign: 'left' }}>
              Senha
            </DivText>
            <Input
              placeholder="Senha"
              placeholderTextColor="#FFFFFF"
              secureTextEntry
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255, 255, 255, 0.48)',
              }}
            />
            <DivText style={{ fontSize: 18, marginTop: 20, textAlign: 'left' }}>
              Confirmar Senha
            </DivText>
            <Input
              placeholder="Confirmar Senha"
              placeholderTextColor="#FFFFFF"
              secureTextEntry
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255, 255, 255, 0.48)',
              }}
            />
            <Button style={{ marginTop: 30 }}>
              <DivText
                style={{ fontSize: 20, marginTop: 0 }}
                onPress={handleSignIn()}
              >
                Entrar
              </DivText>
            </Button>
            <TextDirection onPress={() => navigation.navigate('SignIn')}>
              <DivText style={{ fontSize: 18, marginTop: 30 }}>Voltar</DivText>
            </TextDirection>
          </DivForm>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
