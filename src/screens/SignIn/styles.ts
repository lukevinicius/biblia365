import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const DivTitle = styled.Text`
  margin-top: 30%;
  color: ${({ theme }) => theme.colors.shape};
  font-size: 50px;
  text-align: center;
  font-weight: bold;
`;
export const DivForm = styled.View`
  margin: 10% 20px 20px 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.48);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;
export const Input = styled.TextInput`
  padding: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.shape};
`;
export const Button = styled(TouchableOpacity)`
  padding: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const TextDirection = styled(TouchableOpacity)`
  color: ${({ theme }) => theme.colors.primary};
`;
