import React from 'react';
import {Text, View ,ScrollView,Button} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import FetchAPI from "../utility/fetchApI"

export default function HomeScreen() {

   const result= FetchAPI()
   //const achievement=await result[0].achievements
    return (
    <View style={tw `mx-2`}>
        <View >
           <Text style={styles.text}>Name: {result[0] &&  result[0].name}</Text>
           <Text style={styles.text}>Age: {result[0] && result[0].age}</Text>
           <Text style={styles.text}>Email: {result[0] && result[0].email}</Text>
        </View>
        <View style={tw `border border-blue-300 px-2 mb-10 `}>
           <Text style={tw `text-gray-300 font-bold px-2 `}>Personal And Profiessinoal Achievements:</Text>
           <View style={tw `px-5 mb-2 `}>
              <ScrollView >
              {result[0] && (
               result[0].achievements.map((item)=> <>
               <View style={tw `border border-blue-300 pl-2`}>
               <Text style={tw`text-white font-semibold  `}>Title: {item.title} </Text>
               <Text style={tw`text-white`}>Discription: {item.content}</Text>
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