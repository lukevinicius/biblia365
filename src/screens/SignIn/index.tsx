import {
  Text,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Button, DivForm, DivTitle, Input, TextDirection } from './styles';
import wallpaper from '../../assets/img/wallpaper1.jpg';

export function SignIn() {
  function handleSignIn() {
    // Fazer o login do usuário, usuário e senha não podem estar vazios
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
          <DivTitle>Entrar</DivTitle>
          <DivForm>
            <DivTitle
              style={{ fontSize: 18, marginTop: 40, textAlign: 'left' }}
            >
              Nome de usuário
            </DivTitle>
            <Input
              placeholder="Username"
              placeholderTextColor="#FFFFFF"
              keyboardType="text"
              autoCorrect={false}
              autoCapitalize="none"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255, 255, 255, 0.48)',
              }}
            />
            <DivTitle
              style={{ fontSize: 18, marginTop: 20, textAlign: 'left' }}
            >
              Senha
            </DivTitle>
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
              <DivTitle
                style={{ fontSize: 20, marginTop: 0 }}
                onPress={handleSignIn()}
              >
                Entrar
              </DivTitle>
            </Button>
            <TextDirection style={{ fontSize: 14, marginTop: 20 }}>
              <DivTitle style={{ fontSize: 16, marginTop: 15 }}>
                Esqueceu a senha?
              </DivTitle>
            </TextDirection>
            <TextDirection>
              <Text
                style={{
                  fontSize: 18,
                  textAlign: 'center',
                  marginTop: 40,
                  color: '#FFFFFF',
                }}
              >
                Novo? <DivTitle style={{ fontSize: 18 }}>Criar Conta</DivTitle>
              </Text>
            </TextDirection>
          </DivForm>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
