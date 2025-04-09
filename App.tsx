import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Pressable, Button } from 'react-native';
import { ClassExample } from './classes/ClassExample';
import { Doggy, DoggyRow } from './classes/DoggyComponent';
import Requestito from './classes/RequestClass';
import RequestFunction from './classes/RequestFunction';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

// toda la UI en react está organizada en unidades a las que llama componentes
// core componentes y componentes nativos - definidos por react native que se traducen a UI nativa

// los componentes se pueden definir de 2 maneras:
// 1. por medio de clases
// 2. por medio de funciones

function App() {

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
          return (
            <Pressable 
              onPress={()=> {
                alert("ROW PRESIONADA!");
              }}
            >
              <DoggyRow name={item.nombre} uri={item.uri} />
            </Pressable>
          );
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function NavRoot({navigation} : any) {

  return (
    <View style={[
      styles.ejemploContainer,
      {
        flexDirection: 'column'
      }
    ]}>
      {/*
        FLEX - distribución arbitraria de espacio en pantalla
        altura y anchura de la pantalla es igual a el total de valores flex de los elementos
        el tamaño de cada elemento se proporciona con respecto a su valor flex y el espacio total
      */}

      {/*
      
        ELEMENTOS UTILIZANDO FLEXBOX
      <Text style={{height:30, backgroundColor: 'white', flex: 2}}>DUMMY TEXT 1</Text>
      <Text style={{height:30, backgroundColor: 'blue', flex: 3}}>HOLA A TODOS!</Text>
      <Text style={{height:30, backgroundColor: 'pink', flex: 5}}>UN TERCER DUMMY</Text>
        */}

      <Text style={{height:30, backgroundColor: 'white'}}>DUMMY TEXT 1</Text>
      <Text style={{height:30, backgroundColor: 'blue'}}>HOLA A TODOS!</Text>
      <Text style={{height:30, backgroundColor: 'pink', position: 'absolute', top: 20, left:30}}>UN TERCER DUMMY</Text>
      {/*
      <Button 
        title="NAVEGACION DEMO"
        onPress={() => {
          navigation.navigate("NavExample", {data : "ALGO DE DATOS QUE VIENEN DE FUERA!"});
        }}
      />
      */}
    </View>
  );
}

function NavExample({navigation, route} : any) {

  return (
    <View>
      <Text>Nav example! {route.params.data}</Text>
    </View>
  );
}

export default function Navigation() 
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="NavRoot"
          component={NavRoot}
        />
        <Stack.Screen 
          name="NavExample"
          component={NavExample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// vamos a utilizar stylesheet 
// similar a CSS

// para crear un nuevo objeto con estilo utilizamos el método StyleSheet.create
// patron de diseño de fábrica
// https://en.wikipedia.org/wiki/Factory_method_pattern
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ejemploContainer: {
    flex: 1,
    backgroundColor: '#FFA600',
    padding: 10,
  }
});

