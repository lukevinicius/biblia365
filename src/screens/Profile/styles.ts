import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;
export const Header = styled.View`
  flex: 0.5;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const Avatar = styled.ImageBackground`
  height: 150px;
  width: 150px;
  margin-bottom: 15px;
`;
export const ViewBody = styled.View`
  margin: 10px 35px;
`;
export const ButtonLogout = styled(TouchableOpacity)`
  padding: 10px;
  width: 50%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const TextButton = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 24px;

  color: ${({ theme }) => theme.colors.shape};
`;
