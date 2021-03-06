import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { Container } from './styles';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export function Home() {
  const navigation = useNavigation();
  const [dataUser, setDataUser] = useState([]);
  const [load, setLoad] = useState(true);

  const { user } = useAuth();

  async function findMonths() {
    await api
      .get(`/readings`, user.username)
      .then(response => {
        setDataUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    findMonths();
    navigation.addListener('focus', () => {
      setLoad(!load);
    });
  }, [load, navigation]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ margin: 5 }}
      onPress={() =>
        navigation.navigate('AppStack', {
          screen: 'MonthDetails',
          params: { month: item.month },
        })
      }
    >
      <ProgressCircle
        percent={item.percentage}
        radius={50}
        borderWidth={10}
        color="#00b894"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text>{item.month}</Text>
      </ProgressCircle>
    </TouchableOpacity>
  );

  return (
    <Container>
      <View style={{ flex: 0.2, marginTop: '20%' }}>
        <FlatList
          data={dataUser}
          renderItem={renderItem}
          horizontal
          keyExtractor={item => item.id}
        />
      </View>
    </Container>
  );
}
