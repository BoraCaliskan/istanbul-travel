import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Explore = () => {
  return (<>
    <View style={{flex:2, justifyContent:'space-between', flexDirection:'row'}}>
      <View>
        <Text style={styles.name}>Explore</Text>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View>
        <Icon style={styles.icon} name="bell-outline" size={40} color="#100F0F" />
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  name:{
    color:'#100F0F',
    fontSize:14
  },
  title:{
    color:'#100F0F',
    fontSize:24
  },
  icon:{
    color:'#100F0F',
  },
})

export default Explore