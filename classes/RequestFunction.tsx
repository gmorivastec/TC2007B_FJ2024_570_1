import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

// recordatorio - 
// el cuerpo de un componente funcional 
// es el método render()

export default function RequestFunction(props: any) {

    const[data, setData] = useState([]);

    async function request() {
        var response = await fetch(props.url);
        var json = await response.json();
        console.log(json);
        setData(json);
    }

    // OTRO HOOK AL RESCATE!
    useEffect(() => {
        request();
    }, []);
    

    return (
        <View>
            {
                data.length > 0 ?
                    <FlatList 
                        data={data}
                        renderItem={({item}) => {
                            return (
                                <View>
                                    <Text>{item['marca']}</Text>
                                    <Text>{item['modelo']}</Text>
                                    <Text>{item['anio']}</Text>    
                                </View>
                            );
                        }}
                    />
                :
                    <ActivityIndicator size="large"/>
            }
        </View>
    );
}