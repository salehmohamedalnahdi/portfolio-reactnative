import React from 'react';
import {Text, View ,ScrollView} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import FetchAPI from "../utility/fetchApI"

export default function HomeScreen() {
   const data=FetchAPI()
    return (
    <View style={tw `mx-2`}>
        <View >
           <Text style={tw `border border-blue-300 text-white font-bold px-2 mb-2`}>Name: </Text>
           <Text style={tw `border border-blue-300 text-white font-bold px-2 mb-2`}>Age: </Text>
           <Text style={tw `border border-blue-300 text-white font-bold px-2 mb-2`}>Email: </Text>
        </View>
        <View style={tw `border border-blue-300 px-2`}>
           <Text style={tw `text-gray-300 font-bold px-2 `}>Personal And Profiessinoal Achievements:</Text>
           <View style={tw `px-5 mb-2`}>
              <ScrollView>
              {data && (
               data.map((item)=> <>
               <View style={tw `border border-blue-300 pl-2 `}>
               <Text key={item.id} style={tw`text-white font-semibold  `}>Title: {item.title} </Text>
               <Text style={tw`text-white mb-2`}>Discription: </Text>
               </View>
               </>)
              ) 
              }
              </ScrollView>
           </View>
           
        </View>
    </View>
  )
}



/* <ScrollView>
              {data ? (
               data.map((item)=> <>
               <Text key={item.id} style={tw`text-white font-semibold `}>Title: {item.title} </Text>
               <Text style={tw`text-white `}>Discription: </Text>
               </>)
              ) : (<Text></Text> )
              }
              </ScrollView>*/