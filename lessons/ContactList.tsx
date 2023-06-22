import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Contacts from 'react-native-contacts';

Contacts.getAll().then(contacts => {
  // contacts returned
})

const ContactList = () => {
const [contactList, setcontactList] = useState<any[]>([]);

  useEffect(() => {

    Contacts.getAll().then(contacts => {
      setcontactList(contacts)
    })
  
  }, [])
  

  return (
    <View>
      <Text>ContactList</Text>
    </View>
  )
}

export default ContactList