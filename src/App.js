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
import BasicJavascript from './pages/BasicJavascript';
import ReactNativeSvg from './pages/ReactNativeSvg';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';

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
        {/* <Communication/>  */}
        {/* <BasicJavascript/> */}
        {/* <ReactNativeSvg/> */}
        {/* <CallAPIVanilla/> */}
        {/* <CallAPIAxios/> */}
        <LocalAPI/>
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
//https://www.youtube.com/watch?v=G3m98l8FeZw&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=21
//https://www.youtube.com/watch?v=jAdX2ll_e_c&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=22 - Basic Javascript yang perlu difahami untuk belajar React Native - Variable, Function, Condition

// https://www.youtube.com/watch?v=jKo9B5vxy_0&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=23 - Cara menggunakan image SVG didalam project React Native

//https://www.youtube.com/watch?v=PiUbEmn5gog&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=29  Implementasi Pemanggilan API di Aplikasi React Native dengan Vanilla JS
//https://www.youtube.com/watch?v=nG31HQD1xRk&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=30  28 - Memunculkan Hasil Call API ke Aplikasi React Native

//https://www.youtube.com/watch?v=aCtFd8YSr5M&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=31  29 - Call API dengan Third Party dan Installasi Axios
 
//https://www.youtube.com/watch?v=NcdYpU_0Ahk&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=32  30 - Membuat Fake API di local dan Installasi JSON Server  
// https://github.com/typicode/json-server  
// https://stackoverflow.com/questions/54776324/powershell-bug-execution-of-scripts-is-disabled-on-this-system

//https://www.youtube.com/watch?v=tCD523C51_A&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=33 31 - Menyiapkan UI Component untuk Implementasi Proses CRUD

//https://www.youtube.com/watch?v=aD6Jhs3CMuc&list=PLU4DS8KR-LJ3SP3PpRb870UoT_0_rjLpV&index=34 32 - Implementasi CRUD di React Native (Create - Method POST)