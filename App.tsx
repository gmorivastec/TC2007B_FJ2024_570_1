import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClassExample } from './classes/ClassExample';

// toda la UI en react está organizada en unidades a las que llama componentes
// core componentes y componentes nativos - definidos por react native que se traducen a UI nativa

// los componentes se pueden definir de 2 maneras:
// 1. por medio de clases
// 2. por medio de funciones

export default function App() {

  // JSX - syntax extension for javascript
  // pseudohtml (sintácticamente)
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ClassExample></ClassExample>
      <StatusBar style="auto" />
    </View>
  );
}

// vamos a utilizar stylesheet 
// similar a CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
