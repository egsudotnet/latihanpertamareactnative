import React, { useState, Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Button } from 'react-native';
 

const Counter = () => {
    const [number, setNumber]=useState(0);
    return (
        <View> 
            <Text>{number}</Text>
            <Button title="Tambah" onPress={() => setNumber(number+1)}/>
        </View>
    )
}

//Counter menggunakan Class
class CounterClass extends Component{
    state = {
        number:0
    }
    render(){
        return (
            <View>
                <Text>{this.state.number}</Text>
                <Button title="Tambah CounterClass" 
                    onPress={() => this.setState({number : this.state.number + 1})}/>
            </View>
        )
    }
}

const StateDinamis = () => {
    return (
        <View>
            <Text style={styles.textTitle}>Materi Component Dinamis Dengan State</Text>  
            <Text style={styles.textSection}>Functional Component</Text>
            <Counter />
            <Counter />
            <Text style={styles.textSection}>Class Component</Text>
            <CounterClass />
        </View>
    )
}


export default StateDinamis;

const styles = StyleSheet.create({
    wrapper : {
        padding:20,
    },
    textTitle : {
        textAlign:"center"
    },
    textSection: {
        marginTop: 20
    }
});