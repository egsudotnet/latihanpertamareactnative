import React from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"; 
import IlustrationMyMap from "../../assets/images/undraw_pie_graph_re_fvol.svg"; 

const ReactNativeSvg = () =>{ 
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi Menggnakan File SVG di dalam React-Native</Text>  
            <TouchableOpacity onPress={() =>{alert("aaaaa")}}>
                <IlustrationMyMap width={244} height={125}/>
            </TouchableOpacity>
        </View>
    );
}

export default ReactNativeSvg;
const styles = StyleSheet.create({
    container : {padding:20, alignItems: 'center'},
    textTitle : {textAlign: 'center'}
});


//https://undraw.co/illustrations