import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Alert, Icon } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { styles } from '../utils/styles';
import { Ionicons } from '@expo/vector-icons';
import { white } from '../utils/colors';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class DeckDetails extends Component {

  state = {
    title: '',
    length: ''
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title:  navigation.state.params.title,
    headerLeft: <Ionicons
                  name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                  onPress={() => navigation.navigate('Decks')}
                  size={Platform.OS === 'ios' ? 30: 20}
                  style={ {paddingLeft:15, paddingRight:15, color:white} }
                />,
  });

  UNSAFE_componentDidMount() {
    const data = this.props.decksList
    const title = this.props.navigation.state.params.title;
    const length = data[title].questions.length;
    this.setState({
      title: title,
      length: length,
    })
  }

  startQuiz = () => {
    if (this.state.length !== 0) {
      //clearLocalNotification().then(setLocalNotification())
      this.props.navigation.navigate(
        'Quiz',
        {
          title: this.state.title,
        }
      )
    } else {
      Alert.alert(
        'Hey!!',
        'Please, add questions first!',
        [
          {text: 'OK'}
        ],
        { cancelable: false }
      )
    }
  }

  addCard = () => {
    this.props.navigation.navigate(
      'NewCard',
      {
        title: this.state.title,
      }
    )
  }

  render(){
    return(
      <View style={{flex:1, justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.titleText}>{this.state.title}</Text>
          <Text style={styles.bodyText}>{this.state.length} cards</Text>
        </View>
        <View>
          <TextButton
            style={[styles.container, styles.buttonText]}
            onPress={() => this.addCard()}>
              Add Card
          </TextButton>
          <TextButton
            style={[styles.container, styles.buttonText]}
            onPress={() => this.startQuiz()}
          >
              Start Quiz
          </TextButton>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (actions) => (
  {
    decksList: actions.decks,
  }
)

export default connect(mapStateToProps)(DeckDetails);
