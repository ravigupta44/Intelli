import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, {useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';


type HomeProps = NativeStackScreenProps<
  RootStackParamList,
  'OtpVerificationScreen'
>;

const OtpVerificationScreen = ({navigation}: HomeProps) => {
  const et1 = useRef<TextInput | null>(null);
  const et2 = useRef<TextInput | null>(null);
  const et3 = useRef<TextInput | null>(null);
  const et4 = useRef<TextInput | null>(null);

  // const [f1, setF1] = useState('');
  // const [f2, setF2] = useState('');
  // const [f3, setF3] = useState('');
  // const [f4, setF4] = useState('');

  return (
    <ScrollView>
    <View>
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <TouchableOpacity style={styles.backButton} onPress={()=>navigation.navigate("LoginScreen")}>
            <Feather
              name="arrow-left"
              size={17}
              color="#FFF"
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.verificationTextContainer}>
          <Text style={styles.verificationText}>Please enter verification </Text>
          <Text style={styles.verificationText}>code sent to</Text>
          <Text style={styles.mobileText}>+91 87*****887</Text>
        </View>



        {/* Enter Otp */}
        <View style={styles.containerInput}>
          <TextInput
            ref={et1}
            style={styles.cellView}
            keyboardType="number-pad"
            maxLength={1}
            placeholder="0"
            placeholderTextColor='#D8CFFF'
            // value={f1}
            onChangeText={txt => {
              // setF1(txt);
              if (txt.length >= 1) {
                et2.current?.focus();
              }
            }}
          />
          <TextInput
            ref={et2}
            style={styles.cellView}
            keyboardType="numeric"
            maxLength={1}
            placeholder="0"
            placeholderTextColor='#D8CFFF'
            // value={f2}
            onChangeText={txt => {
              if (txt.length >= 1) {
                // setF2(txt);
                et3.current?.focus();
              } else if (txt.length < 1) {
                et1.current?.focus();
              }
            }}
          />
          <TextInput
            ref={et3}
            style={styles.cellView}
            keyboardType="number-pad"
            maxLength={1}
            placeholder="0"
            placeholderTextColor='#D8CFFF'
            // value={f3}
            onChangeText={txt => {
              // setF3(txt);
              if (txt.length >= 1) {
                et4.current?.focus();
              } else if (txt.length < 1) {
                et2.current?.focus();
              }
            }}
          />
          <TextInput
            ref={et4}
            style={styles.cellView}
            keyboardType="number-pad"
            maxLength={1}
            placeholder="0"
            placeholderTextColor='#D8CFFF'
            // value={f4}
            onChangeText={txt => {
              if (txt.length >= 1) {
                et4.current?.focus();
                // setF4(txt);
              } else if (txt.length < 1) {
                et3.current?.focus();
              }
            }}
          />
        </View>

        {/* resend button */}
        <View style={styles.resendButton}>
          <TouchableOpacity>
            <Text style={styles.resendButtonText}>Resend</Text>
          </TouchableOpacity>
        </View>

        {/* verify button */}
        <View>
          <TouchableOpacity style={styles.verifyButton} onPress={()=>navigation.navigate("DashboardTwo")}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
    </ScrollView>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:responsiveHeight(100),
    width:responsiveWidth(100),
    marginLeft: responsiveWidth(12),
    marginTop: responsiveHeight(6),
  },
  backButton: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    backgroundColor: '#6544F2',
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    fontWeight: 'bold',
  },
  verificationTextContainer:{
    marginTop:responsiveHeight(7),
  },
  verificationText:{
    fontSize:responsiveFontSize(1.8),
    fontWeight:'500',
    color:'#8F8F8F',
    letterSpacing:1,

  },
  mobileText:{
    color:'#250075',
    fontSize:responsiveFontSize(1.9),
    fontWeight:'700',
    letterSpacing:1,
    marginTop:responsiveHeight(1.8),
  },

  containerInput: {
    display: 'flex',
    flexDirection: 'row',
    marginTop:responsiveHeight(6),
  },
  cellView: {
    width: responsiveWidth(14),
    borderBottomWidth: responsiveWidth(1.3),
    borderBottomColor:'#250075',
    paddingLeft:responsiveWidth(3),
    fontSize:responsiveFontSize(6),
    fontWeight:'600',
    color:'#D8CFFF',
    marginRight:responsiveWidth(7),
    
  },
  resendButton:{
    alignItems:'center',
    marginTop:responsiveHeight(5),
    marginRight:responsiveWidth(20),
  },
  resendButtonText:{
    fontSize:responsiveFontSize(1.8),
    color:'#8F8F8F',
    fontWeight:'500',
    letterSpacing:1,
    borderBottomWidth:responsiveWidth(0.1),
  },


  verifyButton:{
    height:responsiveHeight(8),
    width:responsiveWidth(80),
    backgroundColor:'#6B4EFF',
    borderRadius:responsiveWidth(6),
    alignItems:'center',
    justifyContent:'center',
    marginTop:responsiveHeight(33),
  },
  verifyButtonText:{
    color:'#FFFFFF',
    fontSize:responsiveFontSize(2.3),
    fontWeight:'500',
    letterSpacing:1,
  },
});
