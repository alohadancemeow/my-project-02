import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({ navigation, route }) => {

  const house = route.params

  return (
    <View>
      <Text>{house.title}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})