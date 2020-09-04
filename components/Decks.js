import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, FlatList } from 'react-native';
import TextButton from './TextButton';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { getDecks } from '../actions'
import { styles } from '../utils/styles';
import { Ionicons } from '@expo/vector-icons';

class Decks extends React.Component {

  state = {
    decks: []
  }

  UNSAFE_componentWillMount() {
    this.props.getDecks();
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title:  'FlashCards',
    headerLeft: null,
  });

  renderItem = ({ item }) => (
    <View>
      <TextButton
        style={styles.container}
        onPress={() => this.props.navigation.navigate(
          'DeckDetails',
          { title: item.title, length: item.length }
        )}>
            <Text style={styles.titleDeckText}>
              {item.title}{'\n'}
            </Text>
            <Text style={styles.bodyDeckText}>
              Number of cards: {item.length}
            </Text>
      </TextButton>
    </View>
  )

  render(){
    const db = this.props.decksList;
    const data = Object.keys(db).map(key => (
      {
        'key': key,
        'title': db[key].title,
        'length': db[key].questions.length
      }
    ));
    return(
      <View style={{flex:1}}>
        <Text style={styles.titleText}>
          Choose one Deck
        </Text>
        <FlatList
          data={data}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = (actions) => (
  {
    decksList: actions.decks,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    getDecks: () => dispatch(getDecks()),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
