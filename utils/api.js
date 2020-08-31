import { AsyncStorage } from 'react-native';
import { decks } from './_DATA';

const STORAGE_KEY = 'flashcards:data';

export function getAllDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
  .then(initialData)
}

export function addNewDeck(title) {
  const newDeck = {
    [title]: {
      'title': title,
      questions: [],
    },
  }
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(newDeck));
}

export const addNewCard = (deckTitle, cardDetails) => {
  try {
    AsyncStorage.getItem(STORAGE_KEY)
    .then(data => includeCard(JSON.parse(data), deckTitle, cardDetails));
  } catch (error) {
    console.error('Error saving new card to file', error);
  }
}

export function includeCard (data, deckTitle, cardDetails) {
  const newCard = {
    [deckTitle]: {
      'title': deckTitle,
      'questions': [
        ...data[deckTitle].questions,
        cardDetails
      ]
    }
  }
  const newData = {
    ...data,
    ...newCard,
  }
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
}

export function initialData (data) {
  data === null
  && AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));

  return AsyncStorage.getItem(STORAGE_KEY)
  .then(out => JSON.parse(out))
}
