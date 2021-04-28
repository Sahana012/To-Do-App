import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BookRequestScreen from '../screens/BookRequestScreen';
import ToDoScreen from '../screens/ToDoScreen'


export const AppTabNavigator = createBottomTabNavigator({
  ToDo : {
    screen: ToDoScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/list.png")} style={{width:30, height:30}}/>,
      tabBarLabel : "To Do",
    }
  },
  DonateBooks : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book List",
    }
  },
  
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Add Books",
    }
  }
});