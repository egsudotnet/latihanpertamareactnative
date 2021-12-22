import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import Cart from "../../components/Cart";
import Product from "../../components/Product";


const Communication = () =>{
    const [totalProduct, setTtalProduct] = useState(0);
    return (
        <View style={styles.conainer}>
            <Text tyle={styles.textTitle}>Materi Komunikasi Antar Komponen</Text>
            <Cart quantity={totalProduct}/>
            <Product onButtonPress={()=> setTtalProduct(totalProduct+1)}/>
        </View>
    );
}

export default Communication;
const styles = StyleSheet.create({
    container : {padding:20},
    textTitle : {textAlign: 'center'}
});
