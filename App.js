import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Image
        style={styles.img}
        source={{
          uri: 'https://avatars1.githubusercontent.com/u/17212739',
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100 / 2,
  },
});
