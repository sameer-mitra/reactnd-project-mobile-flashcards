import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import reducer from './reducers';
import Decks from './components/Decks';
import NewDeck from './components/NewDeck';
import { Constants } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { black, white, purple, lightPurp } from './utils/colors';
import { Ionicons } from '@expo/vector-icons';
import DeckDetails from './components/DeckDetails';
import NewCard from './components/NewCard';
import Quiz from './components/Quiz';
import { setLocalNotification } from './utils/helpers';

function MainStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator(
{
  Decks: {
    screen: Decks,
    navigationOptions: {
      title: 'FlashCards',
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'} size={30} color={tintColor}/>
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'FlashCards',
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle-outline'} size={30} color={tintColor}/>
    }
  }
},
  {
  tabBarOptions: {
    style: {
      backgroundColor: lightPurp,
    },
  }
  });


const MainNavigator = StackNavigator({
Home: {
    screen: Tabs,
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: lightPurp
      }
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    },
  },
})

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={ store }>
        <View style={{flex:1}}>
          <MainStatusBar backgroundColor={black} barStyle='light-content'/>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
