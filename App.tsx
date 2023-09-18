import React from 'react';
import WelcomeScreen from './Screens/WelcomeScreen';
import Dashboard from './Screens/Dashboard';
import DashboardTwo from './Screens/DashboardTwo';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OtpVerificationScreen from './Screens/OtpVerificationScreen';
import NotificationScreen from './Screens/NotificationScreen';
import MyCourses from './Screens/MyCourses';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  Dashboard: undefined;
  DashboardTwo: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  OtpVerificationScreen: undefined;
  NotificationScreen: undefined;
  MyCourses:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="DashboardTwo" component={DashboardTwo} />
        <Stack.Screen name="MyCourses" component={MyCourses} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen}/>
        <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
