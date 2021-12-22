import React, { useState, useEffect } from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
  import StylingComponent from './pages/StylingComponent';
  import FlexBox from './pages/FlexBox';
import Position from './pages//Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import TestSendiri from './pages/TestSendiri';
import Communication from './pages/Communication';
//  todo tidak scroll
const app = () => {
  // const [isShow, SetIsShow]= useState(true);
  // useEffect(() => {
  //   console.log("==> useEffect");
  //   setTimeout(() => {
  //     console.log("==> useEffect SetIsShow");
  //     SetIsShow(false)
  //   }, 6000);
  // }, [])

  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/>    
        <StylingComponent/>   */}
        {/* {isShow && <FlexBox/>} */}
        {/* <Position/>      */}
        {/* <FlexBox /> */}
        {/*  <PropsDinamis />*/} 
        {/* <StateDinamis/> */}
        {/* <TestSendiri />  */}
        {/* <Position /> */}

        <Communication/> 
      </ScrollView>
    </View>
  );
};
export default app;

//https://www.youtube.com/watch?v=0YfdpjgBa6w&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=11
//https://www.youtube.com/watch?v=Pmo83T83UrI&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=12
//https://www.youtube.com/watch?v=YZfr6EYQjTk&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=13
//https://www.youtube.com/watch?v=40vX41Qao5M&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=14
//https://www.youtube.com/watch?v=gWqgPJ_j2LI&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=15 - React Native Debuger Siklus hidup ()
//https://www.youtube.com/watch?v=Y6qXMEwp3ng&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=16 - Siklus hidup Fucntional Component

//https://www.youtube.com/watch?v=4AsOTDdmx_I&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=20//
//  a8esWnLN8mtbLdDxgfnF

// //  /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow strict-local
// //  */

// // import SampleComponent from './SampleComponent';
// // import StylingReactnativeComponent from './StylingReactnativeComponent';
// // import React from 'react';
// // import type {Node} from 'react';
// // import {
// //   SafeAreaView,
// //   ScrollView,
// //   StatusBar,
// //   StyleSheet,
// //   Text,
// //   useColorScheme,
// //   View,
// // } from 'react-native';

// // import {
// //   Colors,
// //   DebugInstructions,
// //   Header,
// //   LearnMoreLinks,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';

// // const Section = ({children, title}): Node => {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // };

// // const App: () => Node = () => {
// //   const isDarkMode = useColorScheme() === 'dark';

// //   const backgroundStyle = {
// //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// //   };

// //   return (
// //     <SafeAreaView style={backgroundStyle}>
// //       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
// //       <ScrollView
// //         contentInsetAdjustmentBehavior="automatic"
// //         style={backgroundStyle}>
// //         <Header />
// //         <View
// //           style={{
// //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
// //           }}>
// //           <Section title="Step One">
// //             Edit <Text style={styles.highlight}>App.js</Text> to change this
// //             screen and then come back to see your edits.
// //           </Section>
// //           <Section title="See Your Changes">
// //             <ReloadInstructions />
// //           </Section>
// //           <Section title="Debug">
// //             <DebugInstructions />
// //           </Section>
// //           <Section title="Learn More">
// //             Read the docs to discover what to do next:
// //           </Section>
// //           <SampleComponent/> 
// //          <StylingReactnativeComponent/>   

// //           {/* <LearnMoreLinks /> */}
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// // });

// // export default App;
