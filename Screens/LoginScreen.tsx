import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';


import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

const LoginScreen = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      {/* topPart */}
      <View style={styles.containerOne}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Just few steps </Text>
          <Text style={styles.headerText}>to join our</Text>
          <Text style={styles.headerText}>family</Text>
        </View>
        <View style={styles.trophyContainer}>
          <Image
            source={require('../Assets/Trophy.png')}
            style={styles.trophyImage}
          />
        </View>
      </View>
      {/* bottom part */}
      <LinearGradient
        colors={['#6B4EFF', '#9682EC']}
        style={styles.containerTwo}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={styles.formContainer}>
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Login or</Text>
            <TouchableOpacity style={styles.signupText} onPress={()=>navigation.navigate("SignUpScreen")}>
              <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.inputText} placeholder="Email / Mobile" />
          <TouchableOpacity style={styles.buttonContinue} onPress={()=>navigation.navigate("OtpVerificationScreen")}>
            <Text style={styles.textContinue}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.checkBoxContainer}>
            <BouncyCheckbox
              size={responsiveWidth(3.6)}
              innerIconStyle={{
                borderWidth: 1,
                borderRadius: 0,
                borderColor: '#FFFFFF',
              }}
              style={styles.checkbox}
            />
            <Text style={styles.temsText}>Accept terms & policies</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
    
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:responsiveHeight(100),
    width:responsiveWidth(100),
  },
  containerOne: {
    // flex: 2,
    height:responsiveHeight(53),
    // width:responsiveHeight(100),
  },
  containerTwo: {
    // flex: 1.7,
    height:responsiveHeight(47),
    // width:responsiveHeight(98),
    borderTopLeftRadius: responsiveWidth(12),
    borderTopRightRadius: responsiveWidth(12),
  },

  textContainer: {
    height: responsiveHeight(16),
    width: responsiveWidth(60),
    // backgroundColor:'blue',
    top: responsiveHeight(7.4),
    left: responsiveWidth(8),
  },
  headerText: {
    fontSize: responsiveFontSize(3.7),
    fontWeight: '500',
    color: '#250075',
    letterSpacing: 1,
  },
  trophyContainer: {
    // height:
    // elevation:7,
  },
  trophyImage: {
    position: 'absolute',
    right: 0,
    top: responsiveHeight(1),
    height: responsiveHeight(40),
    width: responsiveWidth(70),
    transform: [{rotate: '-0.84 deg'}],
  },

  formContainer: {
    top: responsiveHeight(6),
    left: responsiveWidth(9),
    // justifyContent:'center',
    // alignItems:'center'
  },
  loginTextContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'center'
    
  },
  loginText: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 1,
    // marginLeft:10,
  },
  signupText:{
    marginLeft:responsiveWidth(3),
  },
  inputText: {
    height: responsiveHeight(6.5),
    width: responsiveWidth(78),
    backgroundColor: '#FFFFFF',
    borderRadius: responsiveWidth(4),
    marginTop: responsiveHeight(4),
    paddingLeft: responsiveWidth(7),
    letterSpacing: 1,
  },
  buttonContinue: {
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    backgroundColor: '#250075',
    borderRadius: responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(4.6),
  },
  textContinue: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    letterSpacing: 1,
  },
  checkBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(5),
    // alignSelf:'center',
    color: '#FFFFFF',
  },
  checkbox: {
    // color:'white'
    marginLeft: responsiveWidth(15),
  },
  temsText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
});
