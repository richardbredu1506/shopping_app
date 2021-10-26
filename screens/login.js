import React from 'react';
import {View, Image, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export default function login({navigation}){
    
    return(
        <View style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: "white"
            }}>
            <Image
                style={{
                    width: 100,
                    height: 100,
                    marginBottom: 10,
                    transform: [{rotate: "-45deg"}]
                    // borderRadius: 5
                }}
                source={require("../assets/shoppingCart.png")}
            />
            <Text style={{color: "gray", fontSize: 24}}>Welcome to</Text>
            <Text style={{color: "black", fontSize: 32, fontWeight: 60}}>Richie's Clothing</Text>
            <TouchableOpacity 
                style={{
                    backgroundColor: "grey", 
                    padding: 5, 
                    paddingHorizontal: 60, 
                    marginTop: 20, 
                    borderRadius: 5, 
                    flexDirection: "row",
                    alignItems: "center"
                    }}>
                <AntDesign name="google" size={24} color="red"/>
                <Text style={{color: "black", fontSize: 16,fontWeight: 500, marginLeft: 20 }}>Login with G-mail</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    backgroundColor: "black", 
                    padding: 5, 
                    paddingHorizontal:60, 
                    marginTop: 20, 
                    borderRadius: 5,
                    flexDirection: "row",
                    alignItems: "center"
                    }}>
                <AntDesign name="apple1" size={24} color="white"/>
                <Text style={{color: "white", fontSize: 16, fontWeight: 500, marginLeft: 20 }}>Login with Apple</Text>
            </TouchableOpacity>
            <Text style={{color: "grey", fontSize: 12}}>Not a member?
            <TouchableOpacity style={{marginTop: 10}}>
                <Text style={{color: "orange", fontWeight: "bold"}}> Sign Up</Text>
            </TouchableOpacity>
            </Text>
            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate("homepage")
                }}
                style={{marginTop: 30}}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    )
}