import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      text: 'Milk',
    },
    {
      id: uuid(),
      text: 'Eggs',
    },
    {
      id: uuid(),
      text: 'Fruits',
    },
    {
      id: uuid(),
      text: 'Meat',
    },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <Text style={{color: 'black'}}>{item.text}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
