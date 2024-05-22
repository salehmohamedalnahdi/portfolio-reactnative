import React from 'react';
import {Text, View ,ScrollView,Button} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import FetchAPI from "../utility/fetchApI"

export default function HomeScreen() {

   const data=FetchAPI()
    return (
    <View style={tw `mx-2`}>
        <View >
           <Text style={styles.text}>Name: </Text>
           <Text style={styles.text}>Age: </Text>
           <Text style={styles.text}>Email: </Text>
        </View>
        <View style={tw `border border-blue-300 px-2 mb-10 `}>
           <Text style={tw `text-gray-300 font-bold px-2 `}>Personal And Profiessinoal Achievements:</Text>
           <View style={tw `px-5 mb-2 `}>
              <ScrollView >
              {data && (
               data.map((item)=> <>
               <View style={tw `border border-blue-300 pl-2`}>
               <Text key={item.id} style={tw`text-white font-semibold  `}>Title: {item.title} </Text>
               <Text style={tw`text-white`}>Discription: </Text>
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

const styles={text:tw `border border-blue-300 text-white font-bold px-2 mb-2`}

/* <ScrollView>
              {data ? (
               data.map((item)=> <>
               <Text key={item.id} style={tw`text-white font-semibold `}>Title: {item.title} </Text>
               <Text style={tw`text-white `}>Discription: </Text>
               </>)
              ) : (<Text></Text> )
              }
              </ScrollView>*/