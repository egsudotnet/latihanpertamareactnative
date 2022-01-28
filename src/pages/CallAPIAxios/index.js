//import { Axios } from "axios";
import * as Axios from 'axios';
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View ,Image} from "react-native"; 
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import IlustrationMyMap from "../../assets/images/undraw_pie_graph_re_fvol.svg"; 

const CallAPIAxios = () =>{ 

    const [dataUser, setDataUser] = useState({
        avatar:'',
        email:'',
        first_name:'',
        last_name:''
    })
    const [dataJob, setDataJob] = useState({ 
        name:'',
        job:''
    }) 
 
    // CALL API Methode GET
    const getData = () =>{
        Axios.get('https://reqres.in/api/users/3')
        .then(result => {
            setDataUser(result.data.data)
        })
        .catch(err => console.log('err: ', err)) 
    }
    // CALL API Methode POS
    const dataForAPI = {
        name:"morpheus sss",
        job:"leader"
    }
    const postData = () =>{ 
        Axios.post('https://reqres.in/api/users',dataForAPI)
        .then(result => {
            setDataJob(result.data)
        })
        .catch(err => console.log('err: ', err)); 
    }
    
    // CALL API Methode GET
    const cleartData = () =>{ 
        setDataUser({
            avatar:'',
            email:'',
            first_name:'',
            last_name:''
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Call API dengan Axios</Text>   
            <View style={styles.line}></View> 

            <View style={styles.container}>
                <Button title="GET Data" onPress={getData}  style={styles.container}/>
            </View>
            <View style={styles.container}>
                <Button title="CLEAR Data" onPress={cleartData}  style={styles.container}/>
            </View>

            <Text>Response GET Data</Text>
            {dataUser.avatar.length > 0 && (
                <Image source={{uri : dataUser.avatar}} style={styles.avatar}/>
            )}
            <Text>{dataUser.first_name} {dataUser.last_name}</Text>
            <Text>{dataUser.email}</Text>
            <View style={styles.line}></View> 
            
            <Button title="POST Data"  onPress={postData} />
            <Text>{dataJob.name}</Text>
            <Text>{dataJob.job}</Text>
            <Text style={styles.line}>Response POST Data</Text>
        </View>
    );
}

export default CallAPIAxios;
const styles = StyleSheet.create({
    container : {padding:20, alignItems: 'center'},
    textTitle : {textAlign: 'center'},
    line:{width:200, height:2, backgroundColor:'black', marginVertical:20},
    avatar:{width:100, height:100, borderWidth:2, borderRadius:50}
});
