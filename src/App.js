import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Chat from './screens/Chat';
import Tabs from './navigation/tabs';
import Profile from './screens/Profile';
import Home from './screens/Home';
import Location from './screens/Location';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Messages'}>
          <Stack.Screen name="Messages" component={Tabs} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
