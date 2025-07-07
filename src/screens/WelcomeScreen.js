import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import React from 'react'
import { FONT } from '../Context/theme';
import { useTheme } from '../Context/ThemeContext';
import CustomButton from '../Components/CustomButton';


export default function WelcomeScreen({ navigation }) {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    logo: {
      fontSize: 48,
      color: theme.primary,
      fontWeight: FONT.weight.bold,
      fontFamily: FONT.family.bold,
    },
  
    btn:{ 
      position: 'absolute',
      bottom: 100,
      marginTop: 50,
      paddingVertical: 20, 
      paddingHorizontal: 100, 
      backgroundColor: theme.primary, 
      justifyContent: 'center',
      borderRadius: 50,
      alignItems: 'center',

  
    },
  
    btnText:{ 
      color: '#fff',
      fontSize: FONT.size.large, 
      fontFamily: FONT.family.medium,
      fontWeight: FONT.weight.medium,
    },
  
    tagline:{ 
      color: theme.secondaryText, 
      fontSize: FONT.size.large, 
      marginTop: 25,
      fontFamily: FONT.family.regular,
      fontWeight: FONT.weight.regular,
    }
  })

  return (
    <View style={styles.Container}>
      <Text style={styles.logo}>Rise.<Image source={require('../../assets/riselogo.png')}/></Text>
      <Text style={styles.tagline}>
        get your shit together...
      </Text>
      <CustomButton onPress={()=>navigation.navigate('PinVerification')} btnText="Get Started" btnStyle={styles.btn} btnTextStyle={styles.btnText}/>
    </View>
  )
}

