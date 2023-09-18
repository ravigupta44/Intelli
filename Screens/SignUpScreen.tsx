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
  
  type HomeProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>
  
  const LoginScreen = ({navigation}:HomeProps) => {
    return (
      <View style={styles.container}>
        {/* topPart */}
        <View style={styles.containerOne}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Woo Hoo !  </Text>
            <Text style={styles.headerText}>You’re almost </Text>
            <Text style={styles.headerText}>Done</Text>
          </View>
          <View style={styles.trophyContainer}>
            <Image
              source={require('../Assets/Books.png')}
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
              <Text style={styles.loginText}>Create your account</Text>
            </View>
            <TextInput style={styles.inputText} placeholder="User Name" />
            <TextInput style={styles.inputText} placeholder="Email ID" />
            <TextInput style={styles.inputText} placeholder="Mobile" />
            <TouchableOpacity style={styles.buttonContinue} onPress={()=>navigation.navigate("OtpVerificationScreen")}>
              <Text style={styles.textContinue}>Continue</Text>
            </TouchableOpacity>
            <View style={styles.checkBoxContainer}>
              <BouncyCheckbox
                size={15}
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
      height:responsiveHeight(34),
      // position:'absolute',
      // resizeMode:'contain'
    },
    containerTwo: {
      height:responsiveHeight(66),
      borderTopLeftRadius: responsiveWidth(12),
      borderTopRightRadius: responsiveWidth(12),
    },
  
    textContainer: {
      height: responsiveHeight(15),
      width: responsiveWidth(60),
      // backgroundColor:'blue',
      top: responsiveHeight(8),
      left: responsiveWidth(9),
    },
    headerText: {
      fontSize: responsiveFontSize(3.6),
      fontWeight: '500',
      color: '#250075',
      letterSpacing: 2,
    },
    trophyContainer: {
      
      // height:300,
      // width:300,
      // elevation:2,
      // resizeMode:'contain'
    },
    trophyImage: {
      position: 'absolute',
      right: 0,
      // top: 10,
      // height: 200,
      // width: 200,
      // elevation:2,
      // transform: [{rotate: '-0.84 deg'}],
      resizeMode: 'contain',
    },
  
    formContainer: {
      top: responsiveHeight(6),
      left: responsiveWidth(10),
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
      fontSize: responsiveFontSize(2.7),
      fontWeight: '500',
      color: '#FFFFFF',
      letterSpacing: 2,
      marginBottom: responsiveHeight(4),
      // marginLeft:10,
    },
    inputText: {
      height: responsiveHeight(6.5),
      width: responsiveWidth(80),
      backgroundColor: '#FFFFFF',
      borderRadius: responsiveWidth(4),
      marginBottom:responsiveHeight(3),
      paddingLeft: responsiveWidth(5),
      letterSpacing: 1,
    },
    buttonContinue: {
      height: responsiveHeight(8),
      width: responsiveWidth(76),
      backgroundColor: '#250075',
      borderRadius: responsiveWidth(4),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: responsiveHeight(2),
      marginLeft:responsiveWidth(2),
    },
    textContinue: {
      color: '#FFFFFF',
      fontSize: responsiveFontSize(2),
      fontWeight: '400',
      letterSpacing: 1,
    },
    checkBoxContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: responsiveHeight(4),
      // alignSelf:'center',
      color: '#FFFFFF',
    },
    checkbox: {
      // color:'white'
      marginLeft: responsiveWidth(15),
    },
    temsText: {
      fontSize: responsiveFontSize(1.7),
      fontWeight: '700',
      color: '#FFFFFF',
      letterSpacing: 1,
    },
  });
  