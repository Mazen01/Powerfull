import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import { RootNavigator } from './navigation/RootNavigator';
import { AuthenticatedUserProvider } from './providers';

import 'react-native-gesture-handler';
const App = () => {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        
        <RootNavigator>
          <NavigationContainer>
       
          </NavigationContainer>
        </RootNavigator>
        
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};

export default App;
