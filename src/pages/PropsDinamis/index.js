import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

const Story = (props) => {
    return (
        <View style={{ alignItems: "center", marginLeft:20}}>
            <Image source={{ uri: props.image }}
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 70 / 2 
                }}
            />
            <Text style={{textAlign:"center",maxWidth:50}}>{props.title}</Text>
        </View>
    )
}
const PropsDinamis = () => {
    return (
        <View>
            <Text>Materi Component Dinamis Dengan Props</Text>
            <ScrollView horizontal>
            <View style={{flexDirection:"row"}}>
                <Story title="Youtube" image="https://miro.medium.com/fit/c/1360/1360/0*d74r66UgvF0g-PZG." />
                <Story title="Instagram" image="https://placeimg.com/100/100/tech" />
                <Story title="Facebook" image="https://placeimg.com/100/100/tech" />
                <Story title="Twitter" image="https://placeimg.com/100/100/tech" />
                <Story title="Twitter" image="https://placeimg.com/100/100/tech" />
                <Story title="Twitter" image="https://placeimg.com/100/100/tech" />
                <Story title="Twitter" image="https://placeimg.com/100/100/tech" />
                <Story title="Twitter" image="https://placeimg.com/100/100/tech" />
                <Story title="Twitter" image="https://placeimg.com/100/100/tech" />
                <Story title="Twitter" image="https://placeimg.com/100/100/tech" />
            </View>
                
            </ScrollView>
        </View>
    )
}

export default PropsDinamis;
