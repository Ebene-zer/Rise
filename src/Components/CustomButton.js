import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({onPress,btnText,btnStyle,btnTextStyle}) {

  
  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Text style={btnTextStyle}>{btnText}</Text>
    </TouchableOpacity>
  )
}
