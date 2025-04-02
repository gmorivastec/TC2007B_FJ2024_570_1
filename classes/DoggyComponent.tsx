import { useState } from "react";
import {Text, View, Button, Image, TextInput } from 'react-native';

// IMPORTANTE 
// el cuerpo del componente funcional es la logica que vive en render!
export function Doggy(props : any) {

    // hooks 
    // lógica que nos permite acceder a funcionalidad externa a lo que es propiamente render
    // para los estados utilizamos un hook que se llama usestate
    const[isHappy, setIsHappy] = useState(false);
    const[cuenta, setCuenta] = useState(0);
    const[testInput, setTestInput] = useState("");

    console.log("RENDER DE DOGGY!");

    return (
        <View>
            <Text>GUAU. {props.nombre} {props.edad} estoy {isHappy? "FELIZ :)": "TRISTE :("}</Text>
            <Text> entrada: {testInput} </Text>
            <Text>cuenta de ladridos del dia: {cuenta} </Text>
            <Button 
                title="cambiar felicidad"
                onPress={() => {
                    setIsHappy(!isHappy);
                }}
            />
            <Button 
                title="GUAU."
                onPress={() => {
                    setCuenta(cuenta + 1);
                }}
            />

            <TextInput 
                placeholder="PRUEBA DE INPUT DE TEXTO"
                onChangeText={text => {
                    setTestInput(text);
                }}
            />
        </View>
    );
}

export function DoggyRow(props: any) {
    return(
        <View>
            <Text>Me llamo: {props.name}</Text>
            <Image 
                source={{uri : props.uri}}
                style={{width : 100, height : 100}}
            />
        </View>
    );
}