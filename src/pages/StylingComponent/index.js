
import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

 const  StylingComponent = () =>{
    return (
      <View>
           <Text style={styles.text}>Styleing Reactnative Component</Text> 
           <View 
            style={{
              width:100,
              height:100,
              backgroundColor:"#558776",
              borderWidth:2,
              borderColor:"blue",
              marginTop:20,
              marginLeft:20
            }}>
           </View>
  
           <View style={{padding : 12,backgroundColor:"#D1D9D9",width:225,borderRadius:8}}>
           <Image source={macbook} style={{width : 200,height:200}}/>
           <Text style={{fontSize:14,fontWeight:'bold',marginTop:16}}>New MacBook Pro 2021</Text>
           
           <Text 
           style={{
             fontSize:12,
             fontWeight:'bold',
             marginTop:12,
             color:"#F29944"
             }}>
               Rp.25.00.000
             </Text>
  
           <Text 
           style={{
             fontSize:12,
             fontWeight:'300',
             marginTop:12, 
             }}>
               Jakarta Barat
             </Text>
  
             <View
               style={{
                  backgroundColor:"#6FCF97",
                  paddingVertical:6,
                  borderRadius:25,
                  marginTop:20
  
               }}>
               <Text 
               style={{
                fontSize:14,
                fontWeight:'600',
                color:"white", 
                textAlign:"center"
              
  
               }}>Beli</Text>
             </View>
           </View>
    </View>
    );
  
  }
  
  const styles = StyleSheet.create({
    text :{
        fontSize :18,
        fontWeight:"bold",
        color : "#064420",
        marginTop:20,
        marginLeft:20
    }
  
  })

  export default StylingComponent;