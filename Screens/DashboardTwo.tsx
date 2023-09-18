import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'DashboardTwo'>;

const DashboardTwo = ({navigation}: HomeProps) => {
  return (
    <ScrollView>
      <View style={styles.dashboardTwo}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>Logo</Text>
          <View style={styles.earning}>
            <Text style={styles.textOne}>Earnings : </Text>
            <Text style={styles.textTwo}>14000 ₹</Text>
          </View>
        </View>

        {/* card1 */}
        <LinearGradient colors={['#6B4EFF', '#9682EC']} style={styles.cardOne}>
          <View style={styles.cardOnepartOne}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <TouchableOpacity
              style={styles.notificationText}
              onPress={() => navigation.navigate('NotificationScreen')}>
              <Ionicons name="notifications-outline" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.cardOnepartTwo}>
            <View>
              <Text style={styles.cardOnepartTwoTextOne}>Kelli rose</Text>
              <Text style={styles.cardOnepartTwoTextTwo}>
                Mathematics Faculty
              </Text>
            </View>
            <View style={styles.cardOnepartTwoDetail}>
              <Text style={styles.cardOnepartTwoDetailOne}>01 </Text>
              <Text style={styles.cardOnepartTwoDetailTwo}>Cohort</Text>
            </View>
          </View>
          <View style={styles.cardOnepartThree}>
            <View style={[{marginLeft: 15, marginRight: 30}]}>
              <Text style={styles.gradeText}>Upcoming Session</Text>
              <Text style={styles.timeText}>2:15 pm</Text>
            </View>
            <View style={[{marginLeft: 15, marginRight: 30}]}>
              <Text style={styles.gradeText}>Grade</Text>
              <Text style={styles.timeText}>06</Text>
            </View>
            <TouchableOpacity style={styles.resheduleButton}>
              <Text style={styles.resheduleText}>Reschedule</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* card2 */}
        <View style={styles.cardTwoContainer}>
          <View style={styles.cardTwoContainerOne}>
            <Text style={styles.myCourseText}>My Course</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('MyCourses')}>
              <Entypo name="plus" size={responsiveWidth(4.4)} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.cardTwoContainerTwo}>
          <Text style={styles.myCourseText}>My Resources</Text>
          <TouchableOpacity style={styles.addButtonTwo}>
              <Entypo name="plus" size={responsiveWidth(4.4)} color="white" />
            </TouchableOpacity>
            <View style={styles.resourcesContainer}>
              <View style={styles.materialContainer }>
                <Text style={styles.materialText}>Materials</Text>
              </View>
              <View style={styles.materialContainer}>
              <Text style={styles.materialText}>Videos</Text>
              </View>
            </View>
            
          </View>
        </View>

        {/* card3 */}
        <View style={styles.cardTwo}>
          <View style={styles.cardThreeFlex}>
            <View>
              <Text style={styles.cardThreeTextOne}>My Class</Text>
              <Text style={styles.cardThreeTextTwo}>Current Cohort</Text>
              <Text style={styles.cardThreeTextThree}>January 2023</Text>
              <View style={styles.totalStudentBox}>
                <Text style={styles.totalStudentText}>Total Students</Text>
                <View style={styles.numberTextBox}>
                  <Text style={styles.numberText}>56</Text>
                </View>
              </View>
            </View>
            <View style={styles.sessionsBox}>
              <View>
                <Text style={styles.sessionsBoxText}>Today</Text>
                <Text style={styles.sessionsBoxText}>Sessions</Text>
              </View>
              <View style={styles.sessionsNumberBox}>
                <Text style={styles.sessionsNumberBoxText}>2/6</Text>
              </View>
            </View>
          </View>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          {/* <Feather name='forward'/> */}
          <View style={styles.footerOne}>
            <Feather name="home" size={21} color="white" />
            <Text style={styles.footerOneText}>Home</Text>
          </View>
          <View style={styles.footerTwo}>
            <MaterialCommunityIcons
              name="message-minus"
              size={20}
              color="#250075"
            />
          </View>
          <View style={styles.footerThree}>
            <Ionicons name="settings-sharp" size={20} color="#250075" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardTwo;
const styles = StyleSheet.create({
  dashboardTwo: {
    flex: 1,
  },
  header: {
    width: responsiveWidth(90),
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(6),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: responsiveFontSize(2.8),
    marginLeft: responsiveWidth(1),
    fontWeight: '500',
    lineHeight: responsiveHeight(3.5),
    letterSpacing: 1,
    color: '#0F0030',
  },
  earning: {
    height: responsiveHeight(5.5),
    width: responsiveWidth(45),
    borderRadius: responsiveWidth(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC226',
    position: 'absolute',
    right: 0,
  },

  textOne: {
    color: '#0F0030',
    fontWeight: '500',
    marginRight: responsiveWidth(3),
  },
  textTwo: {
    color: '#0F0030',
    fontWeight: '600',
    letterSpacing: 1,
  },

  cardOne: {
    height: responsiveHeight(24),
    width: responsiveWidth(90),
    marginTop: responsiveHeight(2.5),
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(3),
    borderRadius: responsiveWidth(5),
    elevation: responsiveWidth(1),
    backgroundColor: '#6B4EFF',
  },
  cardOnepartOne: {
    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(3),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: responsiveFontSize(3.7),
    color: '#FFFFFF',
    fontFamily: 'sans serif',
    fontWeight: '600',
    letterSpacing: 1,
  },

  notificationText: {
    fontSize: responsiveFontSize(2.7),
    color: '#FFFFFF',
    marginRight: responsiveWidth(8),
    position: 'absolute',
    right: 0,
  },
  cardOnepartTwo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(7),
    marginRight: responsiveWidth(7),
  },
  cardOnepartTwoTextOne: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(2.4),
    letterSpacing: 1,
    fontWeight: '500',
  },
  cardOnepartTwoTextTwo: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(1.4),
    fontWeight: '500',
    letterSpacing: 1,
  },
  cardOnepartTwoDetail: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardOnepartTwoDetailOne: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
  },
  cardOnepartTwoDetailTwo: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(2.4),
    fontWeight: '400',
  },
  cardOnepartThree: {
    height: responsiveHeight(6.7),
    width: responsiveWidth(83),
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(1.6),
    borderRadius: responsiveWidth(3),
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },
  timeText: {
    color: '#250075',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
    marginTop: responsiveHeight(0.3),
  },
  gradeText: {
    color: '#B3B3B3',
    fontSize: responsiveFontSize(1.3),
    fontWeight: '500',
  },
  resheduleButton: {
    height: responsiveHeight(4.3),
    width: responsiveWidth(26),
    marginLeft: responsiveWidth(1.6),
    borderRadius: responsiveWidth(2),
    backgroundColor: '#250075',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resheduleText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(1.3),
    fontWeight: '500',
  },

  cardTwo: {
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(2.8),
    borderRadius: responsiveWidth(5),
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: responsiveWidth(4),
    elevation: responsiveWidth(1),
    backgroundColor: 'white',
  },
  cardTwoTexts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 25,
    marginTop: 10,
  },
  cardTwoTextOne: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardTwoTextTwo: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 25,
  },
  videoSession: {
    // marginLeft:15,
    marginTop: 8,
  },
  videoBoxOne: {
    height: 90,
    width: 80,
    marginLeft: 15,
    backgroundColor: '#FFD54E',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoBoxRest: {
    height: 90,
    width: 80,
    marginLeft: 15,
    backgroundColor: '#6B4EFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoBoxText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
  },

  cardThreeFlex: {
    display: 'flex',
    flexDirection: 'row',
  },

  cardThreeTextOne: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.6),
    marginTop: responsiveHeight(1.9),
    marginLeft: responsiveWidth(6),
  },
  cardThreeTextTwo: {
    color: '#6B4EFF',
    fontWeight: '400',
    letterSpacing: 1,
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(6),
  },
  cardThreeTextThree: {
    color: '#000000',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: responsiveHeight(0.8),
    marginLeft: responsiveWidth(6),
  },
  totalStudentBox: {
    height: responsiveHeight(4.8),
    width: responsiveWidth(46),
    backgroundColor: '#6B4EFF',
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(6),
    borderRadius: responsiveWidth(2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: responsiveWidth(1.5),
    paddingLeft: responsiveWidth(2),
  },
  numberTextBox: {
    height: responsiveHeight(3),
    width: responsiveWidth(13),
    backgroundColor: '#EDEDED',
    borderRadius: responsiveWidth(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalStudentText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(1.5),
    marginLeft: responsiveWidth(1.3),
  },
  numberText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
  },
  sessionsBox: {
    height: responsiveHeight(16),
    width: responsiveWidth(28),
    backgroundColor: '#6B4EFF',
    borderRadius: responsiveWidth(3),
    elevation: 5,
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(5),
    // alignItems:'center'
  },
  sessionsBoxText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(1.7),
    fontWeight: 'bold',
    marginLeft: responsiveWidth(5),
  },
  sessionsNumberBox: {
    height: responsiveHeight(5),
    width: responsiveWidth(21),
    backgroundColor: '#F6F6F6',
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: responsiveWidth(3.5),
    marginTop: responsiveHeight(2.6),
    elevation: 2,
  },
  sessionsNumberBoxText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 7,
  },

  // footer
  footer: {
    // position:'relative',
    // bottom:0,
    height: 100,
    width: 360,
    // backgroundColor:'white',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footerOne: {
    height: 34,
    width: 90,
    backgroundColor: '#250075',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerOneText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 1,
  },
  footerTwo: {
    height: 34,
    width: 30,
    // backgroundColor:'#250075',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerThree: {
    height: 34,
    width: 30,
    // backgroundColor:'#250075',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //card2
  cardTwoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: responsiveHeight(2.5),
  },
  cardTwoContainerOne: {
    height: responsiveHeight(21),
    width: responsiveWidth(32),
    backgroundColor: '#FFD54E',
    borderRadius: responsiveWidth(4),
    elevation: responsiveWidth(1),
  },
  myCourseText:{
    marginTop:responsiveHeight(2),
    marginLeft:responsiveWidth(2.8),
    fontSize:responsiveFontSize(1.7),
    fontWeight:'800',
    color:'#0F0030',
  },
  cardTwoContainerTwo: {
    height: responsiveHeight(21),
    width: responsiveWidth(50),
    backgroundColor: '#FFFFFF',
    borderRadius: responsiveWidth(4),
    elevation: responsiveWidth(1),
  },
  addButton:{
    position:'absolute',
    bottom:responsiveHeight(0),
    right:responsiveWidth(0),
    height:responsiveHeight(4.6),
    width:responsiveWidth(9),
    alignItems:'center',
    justifyContent:'center',
    borderTopLeftRadius:responsiveWidth(4.5),
    backgroundColor:'#250075',   
  },
  addButtonTwo:{
    position:'absolute',
    top:responsiveHeight(0),
    right:responsiveWidth(0),
    height:responsiveHeight(4.6),
    width:responsiveWidth(9),
    alignItems:'center',
    justifyContent:'center',
    // borderTopLeftRadius:responsiveWidth(5),
    borderBottomLeftRadius:responsiveWidth(4.5),
    backgroundColor:'#250075',  
  },
  resourcesContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginTop:responsiveHeight(1.5),
    
  },
  materialContainer:{
    height:responsiveHeight(13.5),
    width:responsiveWidth(20),
    backgroundColor:'#6B4EFF',
    borderRadius:responsiveWidth(3),
  },
  materialText:{
    color:'#FFFFFF',
    fontWeight:'700',
    marginTop:responsiveHeight(1),
    marginLeft:responsiveWidth(2),
    fontSize:responsiveFontSize(1.3),
  },
});
