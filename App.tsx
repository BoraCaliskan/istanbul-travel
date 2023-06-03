import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Explore from './screens/explore'
/*import Icon from 'react-native-vector-icons/MaterialCommunityIcons';*/

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*<View>
        <Icon name="bell-outline" size={30} color="#900" />
        </View>*/}
      <Explore/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    flex:1
  }
  
});

export default App