import React from 'react'
import {
    Text,
    View }
  from "react-native";
  
function RightDrawerContent( {navigation} ) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the  drawer</Text>
     </View>
  )
}

export default RightDrawerContent;

