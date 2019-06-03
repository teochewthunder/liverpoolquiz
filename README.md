# Liverpool Quiz
To celebrate Liverpool's triumph in the 2019 UEFA Champions League, I created this MCQ.

## Specs
- This is a single-page application with three sections - main, questions and results.
- When clicking Begin, the timer should start. User has 60 seconds to complete the quiz.
- There are 10 questions. The user cannot go on to the next question without answering the current one.
- At any point in time, the user can quit. This will bring the user back to the first section.

## HTML
- Class names are partially rendered using template strings.
- Questions and MCQ options are iterated through in the HTML, with a nested options iteration for each question.

## JavaScript
- An array of JSON objects, *questions*. Each question has an array of JSON objects, *options*.
- Getters will return class names depending on system state.
- The timer uses the *$interval* object to begin counting, and to stop counting.

## CSS
- The panels are hidden by default.
- They are only visible when paired with *answered*, *current* or the section name, or any combination of the three.
- 
