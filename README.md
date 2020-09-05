This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Mobile Flashcards Project by Sameer Mitra

## Table of Contents

- [Introduction](#introduction)
- [Instructions](#instructions)
- [Specifications](#specifications)

## Introduction

This project is an application based on Flashcards that allows the user to:
1. View all decks
2. Choose a deck and answer questions
3. View results of answered questions
4. Add a new deck
5. Add your own questions and answers

## Instructions
### How to start the Mobile FlashCards application
- Application may be downloaded or cloned (git clone https://github.com/sameer-mitra/reactnd-project-mobile-flashcards.git )
- Once downloaded or cloned via git clone terminal command
- Run `npm install` via terminal, to download all dependencies for the application.
- Run `expo start --web` via terminal, to launch application's dev server.

## Specifications
### Application Setup
1. Verify that the application requires only npm install and expo start to install and launch.
2. Verify that a README is included with the project. The README includes a description and clear instructions for installing and launching the project.

### Application Functionality
#### Is the initial view a Deck List view?
The primary view, seen when the app loads, is a list of created decks which includes the name of each deck and the number of cards.

#### Does the Deck List view function correctly?
Pressing on a deck in the list should generate an animation, and the app should route to an individual deck view.

#### Does the Individual Deck view display the correct information?
The individual deck view includes (at a minimum):
 - The deck title
 - Number of cards in the deck
 - Option to start a quiz for that deck
 - Option to add a new question to the deck

#### Does the Individual Deck view function correctly?
Pressing the 'Start a Quiz' or 'Add Card' button properly routes to the correct views for those activities.

#### Does the New Question view function correctly?
The New Question view includes a form with fields for a question and answer, and a submit button.
Submitting the form correctly adds the question to the deck.

#### Does the Quiz View function correctly?
The Quiz view starts with a question from the selected deck.
The question is displayed, along with a button to show the answer.
Pressing the 'Show Answer' button displays the answer.
Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
The view displays the number of questions remaining.
When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.

#### Does the New Deck view work correctly?
The view includes a form for creating a new deck - which should just be an input for the title and a 'Create Deck' button.
Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.

#### Does the user receive a notification at a particular time if they haven't studied that day?
Logic for notification has been implemented. Notifications are generated at a specific time if the user hasn't completed at least one quiz for that day.

#### Does the app function correctly in either Android or iOS?
The app works correctly in either Android OR iOS devices (or emulator).
Project README identifies which platform(s) have been tested.

## Code Quality
#### Is the code well written and reasonably structured?
Project code uses reasonable naming conventions. Components are written for reuse and use a modular structure.

#### Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation, such as using key for list items? Is the code formatted properly?
There are no build errors when starting the app. There are no errors while using the app. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.
