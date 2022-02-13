import { useNavigation } from '@react-navigation/native';

import {
  Text,
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

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    // Fazer o login do usuário, usuário e senha não podem estar vazios
  }

  function navigateSignUp() {
    navigation.navigate('SignUp');
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
            <Title>Entrar</Title>
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
            <Button style={{ marginTop: 30 }}>
              <DivText
                style={{ fontSize: 20, marginTop: 0 }}
                onPress={handleSignIn()}
              >
                Entrar
              </DivText>
            </Button>
            <TextDirection style={{ fontSize: 14, marginTop: 20 }}>
              <DivText style={{ fontSize: 16, marginTop: 15 }}>
                Esqueceu a senha?
              </DivText>
            </TextDirection>
            <TextDirection onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: 'center',
                  marginTop: 40,
                  color: '#FFFFFF',
                }}
              >
                Novo? <DivText style={{ fontSize: 18 }}>Criar Conta</DivText>
              </Text>
            </TextDirection>
          </DivForm>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
