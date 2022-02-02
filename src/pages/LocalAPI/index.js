
import * as Axios from 'axios';
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View ,Image, TextInput} from "react-native";  
import { Line } from "react-native-svg";

const Item = () =>{
    return (
        <View style={styles.itemContainer}>
            <Image source={{uri:"https://ui-avatars.com/api/?name=egih+s"}} style={styles.avatar}/>
            <View style={styles.desc}>
                <Text style={styles.descName}>{name}</Text>  
                <Text style={styles.descEmail}>Email</Text>  
                <Text style={styles.descBidang}>Bidang</Text>  
            </View>  
            <Text style={styles.delete}>   X</Text>  
        </View>
    )
}
const LocalAPI = () =>{ 
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [bidang, setBidang]= useState("");
    const submit= () =>{
        const data = {
            name,
            email,
            bidang
        }
        Axios.post("http://10.0.2.2:3004/users",data)
        .then(res =>{
            setName("");
            setEmail("");
            setBidang("");
        })
    }
    useEffect(()=>{
        getData();
    })
    const getData= () =>{ 
        Axios.get("http://10.0.2.2:3004/users")
        .then(res =>{ 
            
        })
    }
    const reset= () =>{ 
        setName("");
        setEmail("");
        setBidang("");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Local API (JSON-Server)</Text>
            <Text>Masukan Anggota Kabayan Coding</Text>  
            <TextInput placeholder="Nama Lengkap" style={styles.input} value={name} onChangeText={(value)=>setName(value)}/> 
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(value)=>setEmail(value)}/> 
            <TextInput placeholder="Bidang" style={styles.input} value={bidang} onChangeText={(value)=>setBidang(value)}/>
            <View  style={styles.buttonContainer}>
                <Button title="Simpan"  style={styles.tombol} onPress={submit}/> 
                <Button title="Reset"  style={styles.tombol} onPress={reset}/> 
            </View> 
            <View style={styles.line}/>
            <Item/>
            <Item/>
            <Item/>
        </View>
    );
}

export default LocalAPI;

const styles = StyleSheet.create({
    container : {padding:20},
    textTitle : {textAlign: 'center'},
    line:{ height:2, backgroundColor:'black', marginVertical:20},
    input:{borderWidth:1, marginBottom:12,borderRadius:10,height:40},
    avatar:{width:90, height:90, borderWidth:2, borderRadius:10},
    itemContainer : {flexDirection: 'row', marginBottom:20},
    desc : {marginLeft: 18},
    descName : {fontSize: 20, marginBottom:10},
    descEmail :{fontSize: 16, marginBottom:5},
    descBidang : {fontSize: 12, marginBottom:5},
    delete : {color:"red",textAlign:"right",marginLeft:10},
    buttonContainer : {marginBottom:20},
    tombol : {marginBottom:20},
});
