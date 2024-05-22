import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/header';
import HomeScreen from './screens/homeScreen';
import tw from 'tailwind-react-native-classnames';


export default function App() {
  return (
    <View style={tw `bg-blue-400 `}>
      <Header />
      <HomeScreen />
    </View>
  );
}

