import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View ,Image, TextInput} from "react-native";  
import { Line } from "react-native-svg";

const Item = () =>{
    return (
        <View style={styles.itemContainer}>
            <Image source={{uri:"https://ui-avatars.com/api/?name=egih+s"}} style={styles.avatar}/>
            <View style={styles.desc}>
                <Text style={styles.descName}>Nama Lengkap</Text>  
                <Text style={styles.descEmail}>Email</Text>  
                <Text style={styles.descBidang}>Bidang</Text>  
            </View>  
            <Text style={styles.delete}>   X</Text>  
        </View>
    )
}
const LocalAPI = () =>{ 
 
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Local API (JSON-Server)</Text>
            <Text>Masukan Anggota Kabayan Coding</Text>  
            <TextInput placeholder="Nama Lengkap" style={styles.input}/> 
            <TextInput placeholder="Email" style={styles.input}/> 
            <TextInput placeholder="Bidang" style={styles.input}/> 
            <Button title="Simpan"/>
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
    delete : {color:"red",textAlign:"right"},
});
