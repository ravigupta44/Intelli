import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<
  RootStackParamList,
  'NotificationScreen'
>;
const NotificationScreen = ({navigation}: HomeProps) => {
  return (
    <ScrollView>
    <View>
      <KeyboardAvoidingView style={styles.container}>
        {/* header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Dashboard')}>
            <Feather
              name="arrow-left"
              size={17}
              color="#FFF"
              style={styles.iconStyle}
            />
          </TouchableOpacity>
          <Text style={styles.notificationText}>Notification</Text>
        </View>

        {/* button component */}
        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={['#250075', '#6544F2']}
            style={styles.buttonOne}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <TouchableOpacity>
              <Text style={styles.buttonOneText}>Students</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity style={styles.buttonOne}>
            <Text style={styles.buttonTwoText}>My Cohort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOne}>
            <Text style={styles.buttonTwoText}>App Team</Text>
          </TouchableOpacity>
        </View>

        {/* Search Group */}
        <View style={styles.seachGroup}>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchText}
              placeholder="Search Student by Name or ID"
            />
            <TouchableOpacity>
              <Feather
                name="search"
                size={responsiveWidth(5)}
                color="#250075"
                style={styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.fiterGroup}>
            <TouchableOpacity style={styles.fiterOne}>
              <Entypo
                name="cross"
                size={11}
                color="#FFFFFF"
                style={styles.iconStyle}
              />
              <Text style={styles.fiterOneText}>Plan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fiterTwo}>
              <Text style={styles.fiterTwoText}>Course</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fiterThree}>
              <Entypo
                name="cross"
                size={11}
                color="#FFFFFF"
                style={styles.iconStyle}
              />
              <Text style={styles.fiterOneText}>Grade</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* recent tab */}
        <View style={styles.recentBox}>
          <Text style={styles.recentText}>Recent</Text>
          <TouchableOpacity>
            <Ionicons
              name="filter-circle-outline"
              size={35}
              color="#250075"
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>

        {/* Notification Box */}
        <View style={styles.NotificationGroup}>
          <TouchableOpacity style={styles.NotificationBox}>
            <View style={styles.NotificationHeader}>
              <Text style={styles.headerNameText}>Student Name</Text>
              <Text style={styles.headerTimeText}>10:28 am</Text>
            </View>
            <View style={styles.NotificationContent}>
              <Text style={styles.ContentText}>
                Lorem ipsum dolor sit amet consectetur. Sed ac enim vitae amet
                odio scelerisque risus. Cursus tincidunt sed senectus eu...
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.NotificationBox}>
            <View style={styles.NotificationHeader}>
              <Text style={styles.headerNameText}>Student Name</Text>
              <Text style={styles.headerTimeText}>10:28 am</Text>
            </View>
            <View style={styles.NotificationContent}>
              <Text style={styles.ContentText}>
                Lorem ipsum dolor sit amet consectetur. Sed ac enim vitae amet
                odio scelerisque risus. Cursus tincidunt sed senectus eu...
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.NotificationBox}>
            <View style={styles.NotificationHeader}>
              <Text style={styles.headerNameText}>Student Name</Text>
              <Text style={styles.headerTimeText}>10:28 am</Text>
            </View>
            <View style={styles.NotificationContent}>
              <Text style={styles.ContentText}>
                Lorem ipsum dolor sit amet consectetur. Sed ac enim vitae amet
                odio scelerisque risus. Cursus tincidunt sed senectus eu...
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.NotificationBox}>
            <View style={styles.NotificationHeader}>
              <Text style={styles.headerNameText}>Student Name</Text>
              <Text style={styles.headerTimeText}>10:28 am</Text>
            </View>
            <View style={styles.NotificationContent}>
              <Text style={styles.ContentText}>
                Lorem ipsum dolor sit amet consectetur. Sed ac enim vitae amet
                odio scelerisque risus. Cursus tincidunt sed senectus eu...
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.NotificationBox}>
            <View style={styles.NotificationHeader}>
              <Text style={styles.headerNameText}>Student Name</Text>
              <Text style={styles.headerTimeText}>10:28 am</Text>
            </View>
            <View style={styles.NotificationContent}>
              <Text style={styles.ContentText}>
                Lorem ipsum dolor sit amet consectetur. Sed ac enim vitae amet
                odio scelerisque risus. Cursus tincidunt sed senectus eu...
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.NotificationBox}>
            <View style={styles.NotificationHeader}>
              <Text style={styles.headerNameText}>Student Name</Text>
              <Text style={styles.headerTimeText}>10:28 am</Text>
            </View>
            <View style={styles.NotificationContent}>
              <Text style={styles.ContentText}>
                Lorem ipsum dolor sit amet consectetur. Sed ac enim vitae amet
                odio scelerisque risus. Cursus tincidunt sed senectus eu...
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
    </ScrollView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:responsiveWidth(100),
    height:responsiveHeight(100),
    top: responsiveHeight(6),
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: responsiveWidth(6),
    // justifyContent:'center'
  },
  backButton: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    backgroundColor: '#6B4EFF',
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    // fontWeight: 'bold',
  },
  notificationText: {
    position: 'absolute',
    right: 0,
    marginRight: responsiveWidth(6),
    fontSize: responsiveFontSize(4),
    fontWeight: '500',
    letterSpacing: 1,
    color: '#250075',
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: responsiveWidth(6),
    marginRight: responsiveWidth(5),
    marginTop: responsiveHeight(3),
  },
  buttonOne: {
    height: responsiveHeight(4.5),
    width: responsiveWidth(25),
    // backgroundColor:'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(2),
  },
  buttonOneText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    letterSpacing: 1,
    elevation: 4,
  },
  buttonTwoText: {
    color: '#250075',
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    letterSpacing: 1,
    elevation: 4,
  },

  seachGroup: {
    height: responsiveHeight(12),
    width: responsiveWidth(85),
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(6),
    marginRight: responsiveWidth(6),
    // padding: responsiveWidth(1),
  },
  searchBox: {
    height: responsiveHeight(5),
    width: responsiveWidth(85),
    borderColor: '#250075',
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(2),
    // marginTop: responsiveHeight(),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  searchText: {
    width: responsiveWidth(70),
    color: '#B3B3B3',
    fontSize: responsiveFontSize(1.3),
    fontWeight: '300',
    letterSpacing: 1,
  },
  fiterGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(3),
  },
  fiterOne: {
    height: responsiveHeight(3.2),
    width: responsiveWidth(15),
    backgroundColor: '#250075',
    borderRadius: responsiveWidth(2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  fiterOneText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(1.3),
    fontWeight: '400',
    letterSpacing: 1,
    marginRight: responsiveWidth(1),
  },
  fiterTwo: {
    height: responsiveHeight(3.2),
    width: responsiveWidth(12),
    // backgroundColor:'#250075',
    borderRadius: responsiveWidth(2),
    borderColor: '#250075',
    borderWidth: responsiveWidth(0.3),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(4),
  },
  fiterTwoText: {
    color: '#250075',
    fontSize: responsiveFontSize(1.2),
    fontWeight: '500',
    // letterSpacing:1,
  },
  fiterThree: {
    height: responsiveHeight(3.2),
    width: responsiveWidth(17),
    backgroundColor: '#250075',
    borderRadius: responsiveWidth(2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: responsiveWidth(4),
  },

  recentBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(6),
    marginRight: responsiveWidth(6),
    justifyContent: 'space-between',
  },
  recentText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.2),
    fontWeight: '500',
    letterSpacing: 1,
  },

  NotificationGroup: {
    marginTop: responsiveHeight(1),
  },
  NotificationBox: {
    height: responsiveHeight(11),
    width: responsiveWidth(88),
    backgroundColor: '#e6e3e3',
    borderRadius: responsiveWidth(4),
    marginLeft: responsiveWidth(6),
    marginBottom:responsiveHeight(2),
  },
  NotificationHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    marginTop: responsiveHeight(1.5),
  },
  headerNameText: {
    color: '#6544F2',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    lineHeight: responsiveHeight(2),
  },
  headerTimeText: {
    color: '#250075',
    fontSize: responsiveFontSize(1.2),
    fontWeight: '500',
    lineHeight: responsiveHeight(2),
  },
  NotificationContent: {
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    marginTop: responsiveHeight(1.4),
  },
  ContentText: {
    color: '#250075',
    fontSize: responsiveFontSize(1.3),
    fontWeight: '500',
    lineHeight: responsiveHeight(2),
    // letterSpacing:1,
  },
});
