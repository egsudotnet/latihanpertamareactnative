
import React, { Component } from 'react';
import {Text,View,Image,TextInput} from 'react-native';


const SampleComponent = () =>{
    return (
      <View>
        <View style={{width : 100,height:80, backgroundColor:"#558776"}}/>
       <Text>Text Component Text 1</Text>
       <Text>Text Component Text 2</Text>
       <Text>Text Component Text 3</Text>
       <Home/>
       <Photo/>
       <TextInput style={{borderWidth:1}}/>
       <BoxGreen/>
       <Profile/>
    </View>
    );
  
  }
  
  
   const Home = () => {
    return <Text>Home Default</Text>;
  };
  
  const Photo = () =>{
    return <Image source={{uri:"https://placeimg.com/100/100/tech"}} style={{height:100,width:100}}/>;
  };
  
  class BoxGreen extends Component{
    render (){
      return <Text>Class Component</Text>;
    }
  }
  class Profile extends Component{
      render (){
      return (
      <View>
        <Image source={{uri:"https://placeimg.com/100/100/nature/grayscale"}} style={{height:100,width:100,borderRadius:50}}/>
        <Text>Ini Photo Profile 12</Text>
      </View>
      )
    }
  }
  

  export default SampleComponent;