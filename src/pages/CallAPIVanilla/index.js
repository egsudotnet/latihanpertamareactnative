import React, { useEffect } from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"; 
import IlustrationMyMap from "../../assets/images/undraw_pie_graph_re_fvol.svg"; 

const CallAPIVanilla = () =>{ 
    useEffect(()=>{
        //// CALL API Methode GET
        // fetch('https://reqres.in/api/users/2')
        // .then(response => response.json())
        // .then(json => console.log(json)) 
        
        // CALL API Methode POS
        const dataForAPI = {
            name:"morpheus",
            job:"leader"
        }
        fetch('https://reqres.in/api/users',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(dataForAPI)
        })
        .then(response => response.json())
        .then(json => console.log('Post Response ',json))
    }, []);
 
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Call API dengan vanilla.js</Text>   
        </View>
    );
}

export default CallAPIVanilla;
const styles = StyleSheet.create({
    container : {padding:20, alignItems: 'center'},
    textTitle : {textAlign: 'center'}
});
