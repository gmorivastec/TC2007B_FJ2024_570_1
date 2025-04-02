// definir un componente por medio de una clase

import { Component, ErrorInfo } from 'react';
import { Text, View, Button } from 'react-native';

// notas para definir un componente como clase 
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
export class ClassExample extends Component<{nombre: string}, {nombre: string, cuenta: number}> {

    // vamos a definir el ciclo de vida


    /*************** MONTAJE  *******************/
    // PROPS - properties, propiedades. Son valores que recibimos del exterior como 
    // argumentos que puede utilizar mi componente. 
    constructor(props: any) {
        super(props);
        console.log("CONSTRUCTOR");

        // ESTADO - conjunto de variables que son parte de la definición interna del compoennte
        // similares a las variables de instancia PERO cono la funcionalidad especial de 
        // poder detonar una actualización. 

        // CÓMO SE DEFINE EL ESTADO EN UN COMPONENTE DE CLASE
        // el estado se define así una sola vez al inicio
        this.state = {nombre: props.nombre, cuenta: 0};
    }

    
    // EL ÚNICO MÉTODO FORZOSO EN UN COMPONENTE ES RENDER
    render() {

        console.log("RENDER");
        return(
            <View>
                <Text>HOLA SOY UN COMPONENTE! y me llamo {this.state.nombre} </Text>
                <Text>UN PROP: {this.props.nombre}</Text>
                <Text>Cuenta actual: {this.state.cuenta}</Text>
                <Button
                    title='INCREMENTAR CUENTA'
                    onPress={() => {
                        this.setState((state) => {
                            return {cuenta: state.cuenta + 1};
                        });
                    }}
                />
            </View>
        );
    }

    componentDidMount(): void {
        console.log("COMPONENT DID MOUNT");
    }

    /*************** ACTUALIZACIÓN **************/
    // AQUÍ TAMBIÉN VA RENDER!

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("DID UPDATE");
    }

    /*************** DESMONTAJE ****************/
    componentWillUnmount(): void {
        console.log("COMPONENT WILL UNMOUNT");
    }

    // por si el componente lanza un error
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("ERROR!");
    }
}