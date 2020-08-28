import { AsyncStorage } from 'react-native';

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

includeCard = (data, deckTitle, cardDetails) => {
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

initialData = (data) => {
  data === null
  && AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(
      {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      }
    )
  )

  return AsyncStorage.getItem(STORAGE_KEY)
  .then(out => JSON.parse(out))
}
