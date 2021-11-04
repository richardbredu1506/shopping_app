import React from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import components from "../components/components";
const width = Dimensions.get("screen").width/2-30;


export default function homepage({navigation}){

    const Card = ({component}) => {
        return (
            <TouchableOpacity 
                onPress={() => navigation.navigate('Carts', component)}>
                <View style={style.card}>
                    <View style={{alignItems: "flex-end"}}>
                        <View 
                            style={{
                                borderRadius: 15, 
                                width: 30, 
                                height: 30,
                                alignItems: "center",
                                justifyContent: "center",                                }}>
                            <MaterialIcons 
                                name="favorite" 
                                size={30} 
                                color={component.love ?  "red" : "black"} />
                        </View>
                    </View>
                    <View style={{height: 180, alighItems: "center"}}>
                        <Image source={component.image} style={{flex: 1, resizeMode: "contain"}} />
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 30, marginTop: 15}}>
                            {component.name}
                        </Text>
                    </View>
                    
                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10,  marginLeft: 20, marginRight: 20}}>
                        <Text 
                            style={{fontWeight: "bold", fontSize: 26 }}>
                            Price: {component.price_tag}
                        </Text>
                        <View 
                            style={{backgroundColor: "grey", width: 25, height: 25, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <AntDesign name="plus" size={24} color="white" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            
        )
    }
    
    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "black",
                paddingHorizontal: 10,
                
            }}>
            <View> 
                <View style={{alignItems: "center"}}>
                    <Text style={{fontSize: 40, fontWeight: 800, color: "white"}}>RICHIE'S CLOTHING 
                    <AntDesign name="shoppingcart" size={40} color="white" style={{marginLeft: 20}} />    
                    </Text>
                </View>
            </View>
            <View style={{marginTop: 30, flexDirection: "row"}}>
                <View style={{
                        height: 50,
                        backgroundColor: "grey",
                        borderRadius: 10,
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                    <Feather name="search" size={24} color="black" style={{marginLeft: 20, marginRight: 5}} />
                    <TextInput 
                    placeholder="Search" 
                    placeholderTextColor="white"
                    style={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: "bold",
                        flex: 0.9,
                    }}/>
                </View>
            </View>
            <FlatList 
                columnWrapperStyle={{justifyContent: "space-between"}}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{
                    marginTop: 20,
                    margintBottom: 30
                }}
                numColumns={2}
                data={components}
                renderItem={({item}) => {
                    return <Card component={item}/>;
                }}
                />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({ 
    card: {
        height: 350,
        backgroundColor: "white",
        width,
        marginHorizontal: 3,
        borderRadius: 100,
        marginBottom: 30,    
    }


});