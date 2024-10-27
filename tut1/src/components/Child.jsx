import { View, Text } from 'react-native'
import React from 'react'

const Child = ({name,count}) => {
  return (
    <View>
      <Text>
        name = {name}
      </Text>
      <text>
        count = {count}
      </text>
    </View>
  )
}

export default Child