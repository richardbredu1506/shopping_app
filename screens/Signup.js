import React from 'react';
import {View, Image, Text, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';

export default function Signup({navigation}){
    
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
            <Text style={{color: "black", fontSize: 32, fontWeight: 700}}>Richie's Clothing</Text>
            <View 
                style={{
                    backgroundColor: "grey", 
                    padding: 5, 
                    paddingHorizontal: 60, 
                    marginTop: 20, 
                    marginBottom: 20,
                    borderRadius: 5, 
                    flexDirection: "row",
                    alignItems: "center"
                    }}>
                <AntDesign name="google" size={24} color="red"/>
                <Text style={{color: "black", fontSize: 16,fontWeight: 500, marginLeft: 20 }}>Sign up with G-mail</Text>
            </View>
            
            <View>
                <Text style={{color: "black", fontWeight: 600, marginTop:10, fontSize: 20}}>User name:</Text>
                    <View style={{flexDirection: "row"}}>
                        <FontAwesome name="user-o" color="black" size={20} />
                        <TextInput 
                        style={{marginLeft: 10, fontSize: 20, fontWeight: 400}}
                        placeholder="Kofi Boakye" 
                        />   
                    </View>
                <Text style={{fontWeight: 600, color: "black", marginTop:10, fontSize: 20}}>Email:</Text>
                <View style={{flexDirection: "row"}}>
                    <AntDesign name="mail" color="black" size={20} />
                    <TextInput style={{marginLeft: 10, fontSize: 20, fontWeight: 400}} 
                    placeholder="mail@gmail.com" 
                    autoCapitalize="none"
                    />
                    <Feather name="check-circle" color="orange" size={20}/>  
                </View>
                <Text style={{color: "black", fontWeight: 600, marginTop:10, fontSize: 20}}>Password:</Text>
                <View style={{flexDirection: "row"}}>
                    <FontAwesome name="lock" color="black" size={20} />
                    <TextInput 
                    style={{marginLeft: 10, fontSize: 20, fontWeight: 400}}
                    placeholder="Your Password" 
                    secureTextEntry="True"
                    autoCapitalize="none"
                    />   
                </View>
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate('GetStarted')}>
                        <Text style={{   
                            marginTop: 20,
                            backgroundColor: "black",
                            color: "white", 
                            fontWeight: 600, 
                            textAlign: "center",
                            borderRadius: 20  
                            }}
                            >Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: "center"}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text style={{marginTop: 20, fontWeight: "bold"}}>---Go Back---</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}