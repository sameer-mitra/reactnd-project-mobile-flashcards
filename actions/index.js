import {
  getAllDecks,
  addNewDeck,
  addNewCard,
 } from '../utils/api';

export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS';
export const NEW_DECK_TITLE = 'NEW_DECK_TITLE';
export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const NEW_CARD = 'NEW_CARD';

export const getDecks = () => async(dispatch) => {
  try {
    getAllDecks()
    .then(data => dispatch(insertDecks(data)))
  } catch(error) {
    console.error('Error reading decks from file', error);
  }
}

export const saveDeckTitle = (title) => async(dispatch) => {
  try {
    addNewDeck(title)
    dispatch(newDeckTitle(title));
  } catch (error) {
    console.error('Error saving new deck', error);
  }
}

export const saveNewCard = (deckTitle, cardDetails) => async(dispatch) => {
  try {
    addNewCard(deckTitle, cardDetails);
    dispatch(newCard(deckTitle, cardDetails));
  } catch (error) {
    console.error('Error saving new card', error);
  }
}


const insertDecks = (decks) => (
  {
    type: RECEIVE_ALL_DECKS,
    decks: decks,
  }
)

const newDeckTitle = (title) => (
  {
    type: NEW_DECK_TITLE,
    decks: title
  }
)

const newCard = (deckTitle, cardDetails) => (
  {
    type: NEW_CARD,
    decks: deckTitle,
    cardQuestion: cardDetails,
  }
)


export function receive_cards(cards){
  return{
    type: RECEIVE_CARDS,
    cards,
  }
}
