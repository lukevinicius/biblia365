import { FlatList, Text, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { useState } from 'react';
import { Container } from './styles';

import dataBible from '../../../data.json';

export function Home() {
  const [dataUser, setDataUser] = useState(dataBible.readings);

  const renderItem = ({ item }) => (
    <View>
      <ProgressCircle
        percent={50}
        radius={50}
        borderWidth={8}
        color="#00b894"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text>{item.mounth}</Text>
      </ProgressCircle>
    </View>
  );

  return (
    <Container>
      <View style={{ flex: 0.2 }}>
        <Text>LOGO</Text>
      </View>
      <View style={{ flex: 0.8 }}>
        <FlatList
          data={dataUser}
          renderItem={renderItem}
          horizontal
          keyExtractor={item => item.mounth}
        />
      </View>
    </Container>
  );
}
