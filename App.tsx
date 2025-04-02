import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ClassExample } from './classes/ClassExample';
import { Doggy, DoggyRow } from './classes/DoggyComponent';
import Requestito from './classes/RequestClass';
import RequestFunction from './classes/RequestFunction';

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
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <ClassExample nombre="EJEMPLITO"></ClassExample>*/}
      {/* <Doggy nombre="FIDO" edad={2} />*/}
      {/* <Requestito url='https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json' />*/}
      {/* <RequestFunction url='https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json' />*/}
      <FlatList 
        data={[
          {nombre: "Perrito1", uri: "https://www.warrenphotographic.co.uk/photography/sqrs/42790.jpg"},
          {nombre: "Perrito2", uri: "https://www.warrenphotographic.co.uk/photography/sqrs/42790.jpg"},
          {nombre: "Perrito3", uri: "https://www.warrenphotographic.co.uk/photography/sqrs/42790.jpg"}
        ]}
        renderItem={({item}) => {
          return (<DoggyRow name={item.nombre} uri={item.uri} />);
        }}
      />
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
