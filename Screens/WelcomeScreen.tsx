import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>

const {width, height } = Dimensions.get('window');



const WelcomeScreen = ({navigation}:HomeProps) =>{
  return (
    <ScrollView style={{flex:1,}}>
    <View style={styles.container}>
    <View style={styles.topHalf} />
    <LinearGradient colors={['#5A35F2', '#9682EC'] } style={styles.bottomHalf} start={{x:0, y:0}} end={{x:1, y:0}}></LinearGradient>
    <View style={styles.content}>
    <View style={styles.logo}>
    <Image
      source={require('../Assets/Vector.png')} 
      style={styles.logoImage}
    />
    <Text style={styles.logoText}>Intelli Edtech</Text>
    </View>
    
    <Image
      source={require('../Assets/011.png')} 
      style={styles.centerImage}
    />

    <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome to our</Text>
        <Text style={styles.welcomeText}>tutoring family!</Text>
    </View>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("LoginScreen")}>
        <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
    </View>
  </View>
  </ScrollView>
  )
}

export default WelcomeScreen
const styles = StyleSheet.create({
    container: {
      height:responsiveHeight(100),
      width:responsiveHeight(100),
        
      },
      topHalf: {
        width: responsiveWidth(100),
        height:responsiveHeight(55),
        backgroundColor: 'white',
      },
      bottomHalf: {
        width: responsiveWidth(100),
        height:responsiveHeight(44),
        borderRadius:responsiveWidth(12),
        
      },
      content:{
        position:'absolute',
        resizeMode:'contain',
      },
      centerImage: {
        top:responsiveHeight(8),
        height:responsiveHeight(48),
        resizeMode: 'contain',
      },
      logo:{
        resizeMode:'contain',
        alignSelf:'center',
        alignItems:'center',
        top:responsiveHeight(9),
      },

      logoImage:{
        height:responsiveHeight(6),
        width:responsiveWidth(10),
      },
      logoText:{
        color:'#250075',
        fontSize:responsiveFontSize(2.5),
        fontWeight:'500',
        marginTop:responsiveHeight(1),
        letterSpacing:1,
      },
      welcome:{
        resizeMode:'contain',
        marginTop:responsiveHeight(10),
        alignSelf:'center',
      },
      welcomeText:{
        color:'#FFFFFF',
        fontSize:responsiveFontSize(2.8),
        fontWeight:'500',
        letterSpacing:1,
      },
      button:{
        height:responsiveHeight(7.5),
        width:responsiveWidth(75),
        backgroundColor:'#FFFFFF',
        borderRadius:responsiveWidth(5),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:responsiveHeight(8),
        elevation:1,
      },
      buttonText:{
        color:'#250075',
        fontSize:responsiveFontSize(2),
        fontWeight:'500',
        letterSpacing:1,
      },
})