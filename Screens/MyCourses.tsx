import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'MyCourses'>;

const MyCourses = ({navigation}: HomeProps) => {
  return (
    <ScrollView style={{flex: 1}}>
      {/* part1 */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('DashboardTwo')}>
          <Feather name="arrow-left" size={17} color="#FFF" />
        </TouchableOpacity>

        <LinearGradient
          colors={['#6B4EFF', '#9682EC']}
          style={styles.headerBoxTwo}>
          <Text style={styles.totalStrengthText}>Total Strength</Text>
          <Text style={styles.numberText}>1400</Text>
        </LinearGradient>
      </View>

      {/* part2 */}
      <View style={styles.partTwoContainer}>
        <Text style={styles.mycoursesText}>My Course</Text>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => navigation.navigate('DashboardTwo')}>
          <Entypo name="plus" size={responsiveWidth(4.5)} color="white" />
        </TouchableOpacity>
      </View>

      {/* part3 */}
      <View style={styles.partThreeContainer}>
        <LinearGradient
          colors={['#5A35F2', '#250075']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.partThreeBox}>
          <View style={styles.innerBox}>
            <Text style={styles.innerBoxText}>Cohorts</Text>
            <Text style={styles.innerBoxNumber}>6</Text>
            <TouchableOpacity style={styles.innerBoxButton}>
              <Text style={styles.innerBoxButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={['#5A35F2', '#9682EC']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.partThreeBox}>
          <View style={styles.innerBox}>
            <Text style={styles.innerBoxText}>Sessions</Text>
            <Text style={styles.innerBoxNumber}>12</Text>
            <TouchableOpacity style={styles.innerBoxButton}>
              <Text style={styles.innerBoxButtonTwoText}>| |</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={['#5A35F2', '#250075']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.partThreeBox}>
          <View style={styles.innerBox}>
            <Text style={styles.innerBoxText}>Completed</Text>
            <Text style={styles.innerBoxNumber}>3/12</Text>
            <TouchableOpacity style={styles.innerBoxButton}>
              <Text style={styles.innerBoxButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

      {/* part4 */}
      <View style={styles.partFourContainer}>
        <Text style={styles.assignmentText}>Assignments</Text>
        <TouchableOpacity
          style={styles.numberButton}
          // onPress={() => navigation.navigate('DashboardTwo')}
        >
          <Text style={styles.numberButtonText}>02</Text>
        </TouchableOpacity>
      </View>

      {/* part5 */}
      <View style={styles.partFiveContainer}>
      <TouchableOpacity>
          <AntDesign
            name="leftcircleo"
            size={responsiveWidth(5.5)}
            color="#250075"
            // style={styles.iconStyle}
          />
        </TouchableOpacity>
        <Text style={styles.cohortText}>Cohort 01</Text>
        <TouchableOpacity>
          <AntDesign
            name="rightcircleo"
            size={responsiveWidth(5.5)}
            color="#250075"
            // style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="filter-circle-outline"
            size={responsiveWidth(9)}
            color="#250075"
            // style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>

      {/* part6 */}
      <View style={styles.partSixContainer}>
      <View style={styles.taskBox}>
            <View style={styles.taskBoxLeft}>
              <Text style={styles.taskText}>Task 1</Text>
              <Text style={styles.nameText}>Name of Assignment</Text>
            </View>
            <TouchableOpacity style={styles.submissionButton}>
              <Text style={styles.submissionText}>Submission</Text>
              <View style={styles.textContainer}>
              <Text style={styles.numberTwoText}>30</Text>
              <Text style={styles.outofText}>out of</Text>
              <Text style={styles.numberTwoText}>46</Text>
              </View>
            </TouchableOpacity>
          </View>

      </View>

      {/* footer */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(4),
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
  },
  backButton: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    backgroundColor: '#6544F2',
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBoxTwo: {
    height: responsiveHeight(7),
    width: responsiveWidth(22),
    borderRadius: responsiveWidth(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalStrengthText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(1.2),
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  numberText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(2.8),
    fontWeight: '500',
  },

  //partTwo
  partTwoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(4),
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
  },
  mycoursesText: {
    color: '#250075',
    fontSize: responsiveFontSize(2.8),
    fontWeight: '600',
    letterSpacing: responsiveWidth(0.3),
  },
  plusButton: {
    height: responsiveHeight(4.4),
    width: responsiveWidth(8.5),
    backgroundColor: '#250075',
    borderRadius: responsiveWidth(2.4),
    justifyContent: 'center',
    alignItems: 'center',
  },

  //partThree
  partThreeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: responsiveHeight(3.5),
    marginRight: responsiveWidth(2),
  },
  partThreeBox: {
    height: responsiveHeight(17.5),
    width: responsiveWidth(25.5),
    // backgroundColor:'blue',
    borderRadius: responsiveWidth(6),
  },
  innerBox: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
  innerBoxText: {
    color: '#F6F6F6',
    fontSize: responsiveFontSize(1.7),
    fontWeight: '400',
    letterSpacing: responsiveWidth(0.2),
    marginTop: responsiveHeight(3),
  },
  innerBoxNumber: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(3),
    fontWeight: '500',
    marginTop: responsiveHeight(1.5),
  },
  innerBoxButton: {
    height: responsiveHeight(2.8),
    width: responsiveWidth(14),
    borderRadius: responsiveWidth(2),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(1.5),
  },
  innerBoxButtonText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.2),
    fontWeight: '600',
  },
  innerBoxButtonTwoText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '900',
  },

  //partFour
  partFourContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
  },
  assignmentText: {
    color: '#250075',
    fontSize: responsiveFontSize(2.4),
    fontWeight: '600',
    letterSpacing: responsiveWidth(0.1),
  },
  numberButton: {
    height: responsiveHeight(4.4),
    width: responsiveWidth(15),
    backgroundColor: '#6544F2',
    borderRadius: responsiveWidth(2.6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberButtonText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(2.4),
    fontWeight: '500',
  },

  //partFive
  partFiveContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
  },
  cohortText:{
    color:'#250075',
    fontSize:responsiveFontSize(2.5),
    fontWeight:'700',
    letterSpacing:responsiveWidth(0.3)
  },

  //partSix
  partSixContainer:{
    marginTop:responsiveHeight(2),
  },
  taskBox:{
    height: responsiveHeight(10),
    width: responsiveWidth(88),
    backgroundColor: '#e6e3e3',
    borderRadius: responsiveWidth(5),
    marginLeft: responsiveWidth(6),
    marginBottom:responsiveHeight(2),
    elevation:responsiveWidth(1),
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  taskBoxLeft:{
  },
  taskText:{
    color:'#250075',
    fontSize:responsiveFontSize(1.8),
    fontWeight:'700',
  },
  nameText:{
    color:'#6544F2',
    fontSize:responsiveFontSize(1.6),
    fontWeight:'400',
    letterSpacing:responsiveWidth(0.3),
  },
  submissionButton:{
    height:responsiveHeight(6),
    width:responsiveWidth(25),
    backgroundColor:'yellow',
    borderRadius:responsiveWidth(2),
    alignItems:'center',
    justifyContent:'center',
  },
  submissionText:{},
  textContainer:{
    display:'flex',
    flexDirection:'row',
  },
  numberTwoText:{},
  outofText:{},

});

export default MyCourses;
