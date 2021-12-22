
import React, { useState, Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Button } from 'react-native';
import cart from '../../assets/icons/cart.png';
 
const Cart = (props) => {
    return (
      <View style={styles.wrapper}>
        <View style={styles.cartWraper}>
          <Image source={cart} style={styles.iconCart} />
          <Text style={styles.notif}>{props.quantity}</Text>
        </View>
        <Text>Keranjang Belanja Anda</Text>
      </View>
    )
}

export default Cart;


const styles = StyleSheet.create({
    notif: {
      fontSize: 12,
      color: 'white',
      backgroundColor: '#439801',
      padding: 4,
      borderRadius: 25,
      width: 25,
      height: 25,
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