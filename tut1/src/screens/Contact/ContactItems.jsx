import { View, Text } from 'react-native'
import React from 'react'

const ContactItems = ({name,email}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  )
}

export default ContactItems