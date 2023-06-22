import { View, Text, Image } from 'react-native'
import React from 'react'

const IstanbulBoxItem = (props: any) => {
  return (
    <View style={{marginLeft:5,marginRight:5}}>
      <Image
        style={{
          width:100,
          height:100
        }}
        source={{
          uri: props.item.path,
        }}
      />
      <Text>{props.item.title}</Text>
    </View>
  )
}

export default IstanbulBoxItem