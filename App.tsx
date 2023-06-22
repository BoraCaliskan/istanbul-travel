import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Explore from './screens/explore'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ContactList from './lessons/ContactList'
/*import Icon from 'react-native-vector-icons/MaterialCommunityIcons';*/

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer> 
      {/*<ContactList />*/}
        {/*<View>
          <Icon name="bell-outline" size={30} color="#900" />
          </View>
        <Explore/>
        
        */}
      
      <SafeAreaView style={styles.container}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Explore} />
          <Tab.Screen name="Settings" component={Explore} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flex:1
  }
  
});

export default App