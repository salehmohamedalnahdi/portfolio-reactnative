import {Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React, { useState } from 'react';
import Collapsible from 'react-native-collapsible';




export default function Header() {
const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }
    
    return (
    <View style={tw `bg-blue-500 mt-10 flex flex-row mb-2`}>
        <View style={tw `pl-4 justify-center`}>
        <TouchableOpacity onPress={toggleCollapse}>
        <Text style={tw `bg-blue-500 text-white font-bold `}>Menu</Text>
      </TouchableOpacity>
        <Collapsible  style={tw `bg-blue-200`} collapsed={isCollapsed}>
          <TouchableOpacity><Text style={styles.header_text}>Home</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.header_text}>About</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.header_text}>Create</Text></TouchableOpacity>
          </Collapsible>
      </View>
        <View style={tw `ml-2`} >
          <Text style={tw ` px-4 py-2 text-white font-bold text-base `} >Welcome To Portfolio</Text>
         
        </View>
    </View>
  )
}
const styles={header_text:tw ` px-4 py-2  font-bold  `}