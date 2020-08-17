import React from 'react';
import {View, Text, Button, BackHandler} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'blue', fontSize: 18}}>
        r14, K8H. Hi, React Native (TypeScript)
      </Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Text>{' '}</Text>
      <Button
        title=" Exit the app "
        onPress={() => {
          console.log('exit...');
          BackHandler.exitApp();
        }}
      />
    </View>
  );
};
export default App;
