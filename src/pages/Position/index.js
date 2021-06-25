import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from './src/assets/icons/cart.png';

export default function Position() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWraper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>9</Text>
      </View>
      <Text>Keranjang Belanja Anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#439801',
    padding: 4,
    borderRadius: 25,
    width: 20,
    height: 24,
    position:'absolute',
    top:0,
    right:0,  
    paddingLeft:6 
  },
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  iconCart: {width: 50, height: 50},
  cartWraper: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderWidth: 1,
    borderColor: '#439801',
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative'
  },
});
