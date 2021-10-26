import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './screens/login';
import homepage from './screens/homepage';

export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={{flex:1, backgroundColor: "white"}}>
      <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName="login">
          <MainNavigator.Screen name="homepage" component={homepage}/>
          <MainNavigator.Screen name="login" component={login}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
      <Text>Main page</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
