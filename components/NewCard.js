import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import TextButton from './TextButton';
import { connect } from 'react-redux';
import { saveNewCard } from '../actions';
import { styles } from '../utils/styles';

export default class NewCard extends Component {

  state = {
    question: '',
    answer: '',
  }

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: title
    }
  }

  insertNewCard = () => {
    const card = this.state;
    if (card.answer === '' || card.question === '') {
      Alert.alert(
        'Hey!!',
        'Please, fill the card correctly!',
        [
          { text: 'OK' }
        ],
        { cancelable: false }
      );
      return;
    }
    this.props.newCard(this.props.navigation.state.params.title, card);
    this.setState(
      {
        question: '',
        answer: ''
      }
    );
    this.props.navigation.navigate(
      'DeckDetails',
      {
        title: this.props.navigation.state.params.title,
        newDeck: false,
      }
    );
  }

  render(){
    return(
      <KeyboardAvoidingView
        style={{flex:1, justifyContent: 'space-between'}}
        keyboardVerticalOffset={200}
        behavior='padding'
      >

        <Text
          style={styles.titleText}
        >
          New Card to {this.props.navigation.state.params.title} Deck
        </Text>

        <Text
          style={styles.normalText}
        >
          Question
        </Text>
        <TextInput
          style={styles.deckTitleText}
          placeholder="Question"
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
          onSubmitEditing={Keyboard.dismiss}
        />

        <Text
          style={styles.normalText}
        >
          Answer
        </Text>
        <TextInput
          style={styles.deckTitleText}
          placeholder="Answer"
          value={this.state.answer}
          onChangeText={(answer) => this.setState({answer})}
          onSubmitEditing={Keyboard.dismiss}
        />

        <TextButton
          style={[styles.container, styles.buttonText]}
          onPress={() => this.insertNewCard()}
        >
          Submit
        </TextButton>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (actions) => (
  {

  }
);

const mapDispatchToProps = (dispatch) => (
  {
    newCard: (title, cardDetails) => dispatch(saveNewCard(title, cardDetails)),
  }
);
/**
export default connect(mapStateToProps, mapDispatchToProps)(NewCard);
**/
