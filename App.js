 import { extend } from 'joi';
import React, { Component } from 'react';
 import {Text,View,Image,TextInput} from 'react-native';

 const app = () => {
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
 };

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
      <Text>Ini Photo Profile</Text>
    </View>
    )
  }
}

 export default app;


// import React from 'react';
// import type { Node } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({ children, title }): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />



//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One (EgSuLab)">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
           
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
