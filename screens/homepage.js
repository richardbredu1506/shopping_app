import React from 'react';
import {View, Text} from "react-native"; 
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function homepage(){
    return(
        <View style={{backgroundColor: "white", flex: 1, paddingTop: 55, paddingHorizontal: 20}}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                 <Ionicons name="ios-menu-outline" size={24} color="black"/>
                 <FontAwesome name="motorcycle" size={24} color="black"/>
                 <View style={{flexDirection: "row"}}>
                 <AntDesign name="search1" size={24} color="black"/>
                 <Ionicons name="notifications-outline" size={24} color="black"/>
                 </View>
            </View>
            <Text>hello world</Text>
        </View>
    )
}