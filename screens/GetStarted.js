import React from 'react';
import {View, Text} from "react-native"; 
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function GetStarted({navigation}){
    return(
      <View style={{
				backgroundColor: "white", 
				flex: 1, 
				justifyContent: "center",
				alignItems: "center"

				}}>
				<TouchableOpacity  onPress={() => navigation.navigate('Home')}>
					<Text 
						style={{
							justifyContent: "center",
							alignItems: "'center",
							borderRadius: 20,
							padding: 10, 
							paddingHorizontal: 20, 
							backgroundColor: "blue", 
							fontSize: 45
							}}>
							Get Started </Text>
				</TouchableOpacity>  
      </View>
  )
}