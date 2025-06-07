import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <View style={styles.Container}>
      <Text style={styles.logo}>Rise.<Image source={require('../../assets/riselogo.png')}/></Text>
      <Text style={styles.tagline}>
        get your shit together...
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  logo: {
    fontSize: 48,
    color: '#ff0000',
    fontWeight: 'bold',
  },

  btn:{ 
    position: 'absolute',
    bottom: 100,
    marginTop: 50,
    paddingVertical: 20, 
    paddingHorizontal: 60, 
    backgroundColor: '#ff0000', 
    borderRadius: 5, 
    alignItems: 'center', 
    justifyContent: 'center',

  },

  btnText:{ 
    color: '#ffffff',
     fontSize: 18, 
    },

  tagline:{ 
    color: '#ffffff', 
    fontSize: 20, 
    marginTop: 25
  }
})