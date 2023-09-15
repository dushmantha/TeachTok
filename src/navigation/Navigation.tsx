import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native';

import {Home, Activity, Bookmarks, Discover, Profile} from '../screens';

const Tab = createBottomTabNavigator();

// Define a higher-order function for tabBarLabel
const createTabBarLabel =
  (label: string) =>
  ({focused}: {focused: boolean}) =>
    (
      // eslint-disable-next-line react-native/no-inline-styles
      <Text style={{color: focused ? 'white' : 'grey'}}>{label}</Text>
    );

// Define a higher-order function for tabBarIcon
const createTabBarIcon =
  (name: string, size: number) =>
  ({focused}: {focused: boolean}) =>
    (
      <MaterialCommunityIcons
        name={name}
        color={focused ? 'white' : 'grey'}
        size={size}
      />
    );

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: 'rgba(34,36,40,1)',
            position: 'absolute',
            borderTopWidth: 0,
          },
          cardStyle: {backgroundColor: 'transparent'}, // Set the card background to transparent
          transparentCard: true, // Enable transparent card mode
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: useMemo(() => createTabBarLabel('Home'), []),
            tabBarIcon: useMemo(() => createTabBarIcon('home', 25), []),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarLabel: useMemo(() => createTabBarLabel('Discover'), []),
            tabBarIcon: useMemo(() => createTabBarIcon('compass', 25), []),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarLabel: useMemo(() => createTabBarLabel('Activity'), []),
            tabBarIcon: useMemo(() => createTabBarIcon('timer', 25), []),
          }}
        />
        <Tab.Screen
          name="Bookmarks"
          component={Bookmarks}
          options={{
            tabBarLabel: useMemo(() => createTabBarLabel('Bookmarks'), []),
            tabBarIcon: useMemo(() => createTabBarIcon('bookmark', 25), []),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: useMemo(() => createTabBarLabel('Profile'), []),
            tabBarIcon: useMemo(
              () => createTabBarIcon('account-circle', 25),
              [],
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
