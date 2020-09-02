import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import reducer from './reducers';
import Constants from 'expo-constants';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { black, white, purple, lightPurp } from './utils/colors';
import { Ionicons } from '@expo/vector-icons';
import { setLocalNotification } from './utils/helpers';
import AppNavigator from './components/AppNavigator';

function MainStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={ store }>
        <View style={{flex:1}}>
          <MainStatusBar backgroundColor={black} barStyle='light-content'/>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
