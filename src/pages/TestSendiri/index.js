import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, Button} from 'react-native';
const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

const TestSendiri = () => {
  const [subcriber, setSubcriber] = useState(100);
  useEffect(() => {
    console.log('==> Did Mount');
    setTimeout(() => {
      //setSubcriber(800);
    }, 2000);
    return () => {
      console.log('==> Did Update');
    };
  }, [subcriber]);
  // useEffect(() => {
  //     console.log("==> Did Update");
  //     setTimeout(() => {
  //         console.log("==> Did Update setTimeout");
  //         setSubcriber(600);
  //     }, 2000);

  // }, [subcriber])
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'gray',
          marginBottom: 5,
        }}>
        <View style={{backgroundColor: '#865439', width: 50, height: 50}} />
        <View style={{backgroundColor: '#39A2DB', flex: 1, height: 100}} />
        <View style={{backgroundColor: '#A239EA', flex: 2, height: 150}} />
        <View style={{backgroundColor: '#D83A56', flex: 3, height: 200}} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'gray',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}>
        <View style={{backgroundColor: '#865439', width: 50, height: 50}} />
        <View style={{backgroundColor: '#39A2DB', width: 50, height: 50}} />
        <View style={{backgroundColor: '#A239EA', width: 50, height: 50}} />
        <View style={{backgroundColor: '#D83A56', width: 50, height: 50}} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F0D9E7',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}>
        <Text>ASD 1</Text>
        <Text>ASD 2</Text>
        <Text>ASD 3</Text>
        <Text>ASD 4</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#A2DBFA',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <TouchableOpacity onPress={() => setSubcriber(subcriber + 2)}>
          <Image
            source={{
              uri: 'https://miro.medium.com/fit/c/1360/1360/0*d74r66UgvF0g-PZG.',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginRight: 20,
            }}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Egih Sugiatna Bas.Kom
          </Text>
          <Text>{subcriber} Ribu Subcriber</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#A2DBFA',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <TouchableOpacity onPress={() => setSubcriber(subcriber + 1)}>
          <Image
            source={{
              uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16810/production/_110567129_glovesresizedforcps.jpg',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginRight: 20,
            }}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Dobleg Inter.Kom
          </Text>
          <Text>{subcriber} Ribu Subcriber</Text>
        </View>
      </View>

      <Counter />
    </View>
  );
};

export default TestSendiri;
