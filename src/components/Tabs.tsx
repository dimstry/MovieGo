/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home/Home';
import TopRated from '../screens/TopRated/TopRated';
import UpComing from '../screens/UpComing/UpComing';
import Popular from '../screens/Popular/Popular';

const Tab = createBottomTabNavigator();

const Tabs = ({navigation}: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarStyle: {
          paddingBottom: 2,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // padding di kiri kanan
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          tabBarLabel: 'Home',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Icons name="search" size={30} color="#000" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({color, size}) => (
            <Icons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Top Rated"
        component={TopRated}
        options={{
          tabBarLabel: 'Top Rated',
          tabBarIcon: ({color, size}) => (
            <Icons name="timeline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Popular"
        component={Popular}
        options={{
          tabBarLabel: 'Popular',
          tabBarIcon: ({color, size}) => (
            <Icons name="favorite" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Up Coming"
        component={UpComing}
        options={{
          tabBarLabel: 'Up Coming',
          tabBarIcon: ({color, size}) => (
            <Icons name="keyboard-arrow-up" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
