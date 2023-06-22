import { View, Text, Image } from 'react-native'
import React from 'react'

const PopularBoxItem = (props: any) => {
  return (
    <View style={{marginLeft:5,marginRight:5}}>
      <Image
        style={{
          width:200,
          height:200
        }}
        source={{
          uri: props.item.path,
        }}
      />
      <Text>{props.item.title}</Text>
    </View>
  )
}

export default PopularBoxItem