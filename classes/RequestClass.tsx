import { Component } from "react";
import { View, Text } from "react-native";

export default class RequestClass extends Component<{url: string}, {model: string}> {

    // JSON - javascript object notation
    // sintaxis que se usa para modelar datos
    // popular actualmente para intercambio de informacion en la web

    // XML 

    // ESTRUCTURA DE JSON 
    // todos los datos estan definidos en tuplas con 2 partes:
    // - llave
    // - valor
    // "llave" : "valor"
    // las tuplas vienen empaquetadas en objetos 

    /*
    
    {
        "nombre" : "algun_nombre",
        "edad" : 25,
        "casado" : falso
    }
    
    */

    // además de objetos en json también tenemos disponibles arreglos
    // los arreglos pueden contener primitivos u objetos 

    /*

    {
        un_arreglo: [2, 5, 10, 22]
    }

    {
        otro_arreglo: [
            {nombre: "A", edad: 20},
            {nombre: "B", edad: 20},
            {nombre: "C", edad: 20}
        ]
    }
    
    */

    // HAGAMOS UN REQUEST
    // código asíncrono 
    // ... qué es eso?
    async request(url: string) {
        console.log("URL: " + url);
        var response = await fetch(url);
        var json = await response.json();

        console.log(json);
        console.log(json[1]);

        this.setState(() => {
            return {model: json[1]['modelo']};
        });
    }

    constructor(props : any) {
        super(props);
        this.state = {model: ""};
        this.request(this.props.url);
    }

    render() {
        return (
            <View>
                <Text>
                    HOLA, SOY UN: {this.state.model}
                </Text>
            </View>
        );
    }
} 