import React, { useEffect } from 'react';
//PUSH NOTIFICATIONS
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
//NAVIGATION
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//APP PAGES
import AccountScreen from './src/screens/AccountScreen';
import BlogScreen from './src/screens/BlogScreen';
import ChallengeDetailScreen from './src/screens/ChallengeDetailScreen';
import ChallengeListScreen from './src/screens/ChallengeListScreen';
import EventScreen from './src/screens/EventScreen';
import HelpScreen from './src/screens/HelpScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import blogPostScreen from './src/screens/BlogPostScreen';
import SurveyScreen from './src/screens/SurveyScreen';
import SurveyComplete from './src/screens/SurveyScreenComplete';
//LOADING SCREEN
import LoadingScreen from './src/screens/LoadingScreen';
import { setNavigator } from './src/navigationRef';
import { Provider as AuthProvider } from './src/context/authContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as ChallengeProvider } from './src/context/challengeContext';
import { Provider as BlogProvider } from './src/context/blogContext';
import { Feather } from '@expo/vector-icons';
import { SimpleSurvey } from 'react-native-simple-survey';

// NAVIGATION SETUP
const challengeFlow = createStackNavigator({
      ChallengeList: ChallengeListScreen,
      ChallengeDetail: ChallengeDetailScreen,
      Help: HelpScreen,
      Account: AccountScreen,
      Survey: SurveyScreen,
      SurveyComplete: SurveyComplete
});

const blogFlow = createStackNavigator({
  Blog:BlogScreen,
  BlogPost: blogPostScreen
});

challengeFlow.navigationOptions = {
  title: 'Home', 
  header: null, 
  tabBarIcon: <Feather name="home" size={20} />
};

blogFlow.navigationOptions = {
  title: 'Blog', 
  header: null, 
  tabBarIcon: <Feather name="message-square" size={20} />
};

const switchNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  loginFlow: createStackNavigator({
    Welcome: WelcomeScreen,
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    challengeFlow,
    blogFlow,
    Events: EventScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  // PUSH NOTIFICATIONS
  useEffect(() => {
    this.getPushNotificationPermissions();
  });

  getPushNotificationPermissions = async () => {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      return;
    }
    console.log(finalStatus)
    console.log("Notification Token: ", await Notifications.getExpoPushTokenAsync());
  }

  return (
    <ChallengeProvider>
      <BlogProvider>
        <LocationProvider>
          <AuthProvider>
            <App ref={ navigator => { setNavigator(navigator) }} />
          </AuthProvider>
        </LocationProvider>
      </BlogProvider>
    </ChallengeProvider>
  );
};



