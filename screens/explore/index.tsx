import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';
import IstanbulBoxItem from '../../components/shared/IstanbulBoxItem';
import PopularBoxItem from '../../components/shared/PopularBoxItem';
//lol
const Explore = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchText, setSearchText] = React.useState('');

  const istanbulItems = [
    {
      title:'Istanbul Archeology Museum',
      path:'https://muze.gov.tr/s3/SectionPicture/SP_e75c08c5-32be-419b-9e5d-fcce4b6fdd72.jpg',

    },
    {
      title:'Istanbul Pera Museum',
      path:'https://media.timeout.com/images/103552237/750/422/image.jpg://muze.gov.tr/s3/SectionPicture/SP_e75c08c5-32be-419b-9e5d-fcce4b6fdd72.jpg',

    },
    {
      title:'Istanbul Archeology Museum',
      path:'https://muze.gov.tr/s3/SectionPicture/SP_e75c08c5-32be-419b-9e5d-fcce4b6fdd72.jpg',

    },
    {
      title:'Istanbul Pera Museum',
      path:'https://media.timeout.com/images/103552237/750/422/image.jpg://muze.gov.tr/s3/SectionPicture/SP_e75c08c5-32be-419b-9e5d-fcce4b6fdd72.jpg',

    },
    {
      title:'Istanbul Archeology Museum',
      path:'https://muze.gov.tr/s3/SectionPicture/SP_e75c08c5-32be-419b-9e5d-fcce4b6fdd72.jpg',

    },
    {
      title:'Istanbul Pera Museum',
      path:'https://media.timeout.com/images/103552237/750/422/image.jpg://muze.gov.tr/s3/SectionPicture/SP_e75c08c5-32be-419b-9e5d-fcce4b6fdd72.jpg',

    },
  ]

  const renderIstanbulItem = ({item}:any) => {

    return <IstanbulBoxItem item={item}></IstanbulBoxItem>
  }
  const renderPopularItem = ({item}:any) => {

    return <PopularBoxItem item={item}></PopularBoxItem>
  }

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

    <View style={{flex:1}}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
    
    <View style={{flex:3}}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text>Trending Destinations</Text>
        <Text>View All</Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          data={istanbulItems}
          renderItem={renderIstanbulItem}
        />
      </View>
    </View>

    <View style={{flex:3 }}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:20}}>Popular Destinations</Text>
        <Text>View All</Text>
      </View>

      <View>
        <FlatList
          horizontal={true}
          data={istanbulItems}
          renderItem={renderPopularItem}
        />
      </View>
    </View>

    <View>
      <TextInput
          style={styles.input}
          onChangeText={setSearchText}
          value={searchText}
          placeholder="useless placeholder"
          keyboardType="numeric"
      />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default Explore