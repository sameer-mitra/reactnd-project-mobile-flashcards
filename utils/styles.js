import { StyleSheet, Platform } from 'react-native';
import { white, lightPurp, black, red } from './colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: lightPurp,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    marginBottom: 17,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  titleDeckText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
  },
  bodyDeckText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  deckTitleText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: black,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 20,
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: white,
    paddingTop: 20,
    paddingBottom: 20,
    padding: 20
  },
  bodyText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: black,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: black,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  quizFinishedText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: red,
    paddingTop: 30,
    paddingBottom: 20,
  },
});
