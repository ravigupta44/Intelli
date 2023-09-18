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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Dashboard'>

const Dashboard = ({navigation}:HomeProps) => {
  return (
    <ScrollView>
    <View>
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
          <TouchableOpacity style={styles.notificationText} onPress={()=>navigation.navigate("NotificationScreen")} >
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
      <View style={styles.cardTwo}>
        <View style={styles.cardTwoTexts}>
          <Text style={styles.cardTwoTextOne}>My Sessions</Text>
          <Text style={styles.cardTwoTextTwo}>+</Text>
        </View>
        <ScrollView horizontal={true} style={styles.videoSession}>
          <View style={styles.videoBoxOne}>
            <Text style={styles.videoBoxText}>Session 2</Text>
          </View>
          <View style={styles.videoBoxRest}>
            <Text style={styles.videoBoxText}>Session 3</Text>
          </View>
          <View style={styles.videoBoxRest}>
            <Text style={styles.videoBoxText}>Videos</Text>
          </View>
          <View style={styles.videoBoxRest}>
            <Text style={styles.videoBoxText}>Videos</Text>
          </View>
          <View style={styles.videoBoxRest}>
            <Text style={styles.videoBoxText}>Videos</Text>
          </View>
          <View style={styles.videoBoxRest}>
            <Text style={styles.videoBoxText}>Videos</Text>
          </View>
        </ScrollView>
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
}

export default Dashboard;
const styles = StyleSheet.create({
  header: {
    width: 360,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 23,
    marginLeft: 10,
    fontWeight: '600',
    lineHeight: 35,
    letterSpacing: 1,
    color: '#0F0030',
  },
  earning: {
    height: 40,
    width: 160,
    borderRadius: 10,
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
    marginRight: 8,
  },
  textTwo: {
    color: '#0F0030',
    fontWeight: '600',
    letterSpacing: 1,
  },

  cardOne: {
    height: 190,
    width: 360,
    marginTop: 18,
    marginLeft: 15,
    marginRight: 10,
    backgroundColor: '#6B4EFF',
    borderRadius: 20,
    elevation: 2,
  },
  cardOnepartOne: {
    marginLeft: 30,
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    color: '#FFFFFF',
    fontFamily: 'sans serif',
    fontWeight: '600',
    letterSpacing: 1,
  },

  notificationText: {
    fontSize: 20,
    color: '#FFFFFF',
    marginRight: 35,
    position: 'absolute',
    right: 0,
  },
  cardOnepartTwo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 30,
    marginRight: 30,
  },
  cardOnepartTwoTextOne: {
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: '500',
  },
  cardOnepartTwoTextTwo: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
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
    fontSize: 20,
    fontWeight: '600',
  },
  cardOnepartTwoDetailTwo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 1,
  },
  cardOnepartThree: {
    height: 55,
    width: 325,
    marginLeft: 15,
    marginTop: 13,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent:'space-evenly',
    alignItems: 'center',
    elevation: 4,
  },
  timeText: {
    color: '#250075',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 3,
  },
  gradeText: {
    color: '#B3B3B3',
    fontSize: 10,
    fontWeight: '500',
  },
  resheduleButton: {
    height: 34,
    width: 100,
    marginLeft: 10,
    backgroundColor: '#250075',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  resheduleText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
  },

  cardTwo: {
    height: 155,
    width: 360,
    marginLeft: 15,
    marginTop: 28,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 5,
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
    // alignItems:'center',
    // justifyContent:'center'
    // marginLeft:20,
  },
  cardThreeTextOne: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
    // marginLeft:20,
    // marginRight:25,
    marginTop: 13,
    marginLeft: 20,
  },
  cardThreeTextTwo: {
    color: '#6B4EFF',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 1,
    marginTop: 10,
    marginLeft: 20,
  },
  cardThreeTextThree: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 6,
    marginLeft: 20,
  },
  totalStudentBox: {
    height: 38,
    width: 180,
    backgroundColor: '#6B4EFF',
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingTop: 10,
    paddingRight: 7,
    // paddingBottom: 10,
    paddingLeft: 10,
  },
  numberTextBox: {
    height: 25,
    width: 60,
    backgroundColor: '#EDEDED',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    // padding:10,
  },
  totalStudentText: {
    color: '#FFFFFF',
    fontSize: 12,
    // fontWeight:'400'
  },
  numberText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sessionsBox: {
    height: 125,
    width: 115,
    backgroundColor: '#6B4EFF',
    borderRadius: 12,
    elevation: 5,
    justifyContent: 'center',
    marginTop: 16,
    marginLeft: 22,
    // alignItems:'center'
  },
  sessionsBoxText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 13,
  },
  sessionsNumberBox: {
    height: 40,
    width: 90,
    backgroundColor: '#F6F6F6',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 13,
    marginTop: 20,
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
});
