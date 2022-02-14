import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import {
  Text,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useState } from 'react';
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
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required('Nome de usuário é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate({ username, password });

      await signIn({ username, password });
    } catch (error: any) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais',
        );
      }
    }
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
              onChangeText={setUsername}
              value={username}
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
              onChangeText={setPassword}
              value={password}
            />
            <Button style={{ marginTop: 30 }}>
              <DivText
                style={{ fontSize: 20, marginTop: 0 }}
                onPress={() => handleSignIn()}
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
