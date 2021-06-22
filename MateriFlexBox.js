 import React,{Component} from 'react';
 import {Text,View,Image} from 'react-native';

class MateriFlexBox extends Component{
    render(){
        return(
        <View>
            <View style={{
                flexDirection:'row', 
                backgroundColor:'gray',
                // alignItems:'center',
                }}> 
                <View style={{backgroundColor:"#865439",width:50,height:50}}></View>
                <View style={{backgroundColor:"#39A2DB",flex:1,height:100}}></View>
                <View style={{backgroundColor:"#A239EA",flex:2,height:150}}></View>
                <View style={{backgroundColor:"#D83A56",flex:3,height:200}}></View> 
            </View>

            
            <View style={{
                flexDirection:'row', 
                backgroundColor:'gray',
                alignItems:'center',
                justifyContent:'space-between'
                }}> 
                <View style={{backgroundColor:"#865439",width:50,height:50}}></View>
                <View style={{backgroundColor:"#39A2DB",width:50,height:50}}></View>
                <View style={{backgroundColor:"#A239EA",width:50,height:50}}></View>
                <View style={{backgroundColor:"#D83A56",width:50,height:50}}></View> 
            </View>

            
            <View style={{
                flexDirection:'row', 
                backgroundColor:'#F0D9E7',
                alignItems:'center',
                justifyContent:'space-between'
                }}> 
                <Text>ASD</Text> 
                <Text>ASD</Text> 
                <Text>ASD</Text> 
                <Text>ASD</Text>  
            </View>

            
            
            <View style={{
                flexDirection:'row', 
                backgroundColor:'#A2DBFA',
                alignItems:'center', 
                marginTop:30
                }}> 
                <Image source={{uri:"https://miro.medium.com/fit/c/1360/1360/0*d74r66UgvF0g-PZG."}}
                style={{
                    width:100,
                    height:100,
                    borderRadius:50,
                    marginRight:20
                }}
                />
                <View>
                <Text 
                    style={{
                        textAlign:'left',
                        fontSize:20,
                        fontWeight:'bold'
                    }}>Egih Sugiatna Bas.Kom
                </Text> 
                <Text>100 Ribu Subcriber</Text>
                </View> 
            </View>
        </View>
        )
    }
}

export default MateriFlexBox;
