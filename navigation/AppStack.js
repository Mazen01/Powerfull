import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
 
  ExerciseDetailsScreen,
  ExerciseDetailsScreen2,
  ExerciseDetailsScreen3,
  ExerciseHomeScreen,
  ScheduleScreen,
  SettingsScreen,
ChallengesScreen,
ProScreen,

  
} from '../screens';
import DietScreen from '../screens/DietScreen';
import MeditationScreen from '../screens/MeditationScreen';
import YogaVideos from '../screens/YogaVideos';
import FitnessVideos from '../screens/FitnessVideos'
import MeditationVideos from '../screens/MeditationVideos';
import TasksScreen from '../screens/TasksScreen';

const Stack = createStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator>
     
    <Stack.Screen name="ExerciseHomeScreen" component={ExerciseHomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ExerciseDetailsScreen" component={ExerciseDetailsScreen} options={{ headerShown: false }}   />
    <Stack.Screen name="ExerciseDetailsScreen2" component={ExerciseDetailsScreen2} options={{ headerShown: false }}   />
    <Stack.Screen name="ExerciseDetailsScreen3" component={ExerciseDetailsScreen3} options={{ headerShown: false }}   />
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }}   />
    <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} options={{ headerShown: false }}   />
    <Stack.Screen name="DietScreen" component={DietScreen} options={{ headerShown: false }}   />
    <Stack.Screen name="MeditationScreen" component={MeditationScreen} options={{ headerShown: false }}   />
    <Stack.Screen name="YogaVideos" component={YogaVideos} options={{ headerShown: false }}   />
    <Stack.Screen name="FitnessVideos" component={FitnessVideos} options={{ headerShown: false }}   />
    <Stack.Screen name="ChallengesScreen" component={ChallengesScreen} options={{ headerShown: false }}   />
    <Stack.Screen name="MeditationVideos" component={MeditationVideos} options={{ headerShown: false }}   />
    <Stack.Screen name="TasksScreen" component={TasksScreen} options={{ headerShown: false }}   />
    <Stack.Screen name="ProScreen" component={ProScreen} options={{ headerShown: false }}   />
   

    
    


  </Stack.Navigator>
  );
};

