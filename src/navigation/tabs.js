import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from '../constants';
import Messages from '../screens/Messages';
import {Icon} from 'react-native-gradient-icon';
import Location from '../screens/Location';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import Home from '../screens/Home';
import {Container} from '../components';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Messages"
      tabBarOptions={{
        showLabel: false,
        style: {
          height: theme.Sizes.height / 11,
          paddingHorizontal: theme.Sizes.padding3 * 2,
          elevation: theme.Sizes.padding1,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Container middle center>
                <Icon
                  size={32}
                  colors={[
                    {color: theme.Colors.blue, offset: '0', opacity: '1'},
                    {color: theme.Colors.purple, offset: '1', opacity: '1'},
                  ]}
                  name="home"
                  type="entypo"
                />
              </Container>
            ) : (
              <Container middle center>
                <Icon
                  size={32}
                  color={theme.Colors.black}
                  name="home"
                  type="entypo"
                />
              </Container>
            ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Container center middle>
                <Icon
                  size={32}
                  colors={[
                    {color: theme.Colors.blue, offset: '0', opacity: '1'},
                    {color: theme.Colors.purple, offset: '1', opacity: '1'},
                  ]}
                  name="location-pin"
                  type="entypo"
                />
              </Container>
            ) : (
              <Container center middle>
                <Icon
                  size={32}
                  color={theme.Colors.black}
                  name="location-pin"
                  type="entypo"
                />
              </Container>
            ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Container center middle>
                <Icon
                  size={32}
                  colors={[
                    {color: theme.Colors.blue, offset: '0', opacity: '1'},
                    {color: theme.Colors.purple, offset: '1', opacity: '1'},
                  ]}
                  name="ios-chatbubble-ellipses"
                  type="ionicon"
                />
              </Container>
            ) : (
              <Container center middle>
                <Icon
                  size={32}
                  color={theme.Colors.black}
                  name="ios-chatbubble-ellipses"
                  type="ionicon"
                />
              </Container>
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Container center middle>
                <Icon
                  size={32}
                  colors={[
                    {color: theme.Colors.blue, offset: '0', opacity: '1'},
                    {color: theme.Colors.purple, offset: '1', opacity: '1'},
                  ]}
                  name="user"
                  type="font-awesome"
                />
              </Container>
            ) : (
              <Container center middle>
                <Icon
                  size={32}
                  color={theme.Colors.black}
                  name="user"
                  type="font-awesome"
                />
              </Container>
            ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Container center middle>
                <Icon
                  size={32}
                  colors={[
                    {color: theme.Colors.blue, offset: '0', opacity: '1'},
                    {color: theme.Colors.purple, offset: '1', opacity: '1'},
                  ]}
                  name="dots-three-horizontal"
                  type="entypo"
                />
              </Container>
            ) : (
              <Container center middle>
                <Icon
                  size={32}
                  color={theme.Colors.black}
                  name="dots-three-horizontal"
                  type="entypo"
                />
              </Container>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
