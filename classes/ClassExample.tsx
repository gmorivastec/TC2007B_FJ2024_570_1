// definir un componente por medio de una clase

import { Component, ErrorInfo } from 'react';
import { Text, View, Button } from 'react-native';

// notas para definir un componente como clase 
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
export class ClassExample extends Component {

    // vamos a definir el cico de vida

    /*************** MONTAJE  *******************/

    /*************** ACTUALIZACIÓN **************/
    // EL ÚNICO MÉTODO FORZOSO EN UN COMPONENTE ES RENDER
    render() {

        return(
            <View>
                <Text>HOLA SOY UN COMPONENTE!</Text>
            </View>
        );
    }

    /*************** DESMONTAJE ****************/
}