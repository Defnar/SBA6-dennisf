# Readme Instructions
## Write a reflection of roughly 300 words addressing:
- How you implemented TypeScript features and OOP principles.
- The challenges you encountered and how you overcame them.
-How you handled asynchronous operations and error management.

# REadme Answers

## How I implemented Typescript
- I utilized typescript and OOP principles by using encapsulation to protect product data using readonly variables, allowing for reading and pulling variables but not editting them.  If need be, I could swap this to protected using getter and setter methods, but for this assignment was not necessary.  I used type annotations across functions and variables to ensure proper inputs and outputs on functions.  I'm working on html and css implementation now, and if I get around to doing that I'll be using interface as a type of validation as well for reviews.

## challenges I encountered
- I did not face much challenge implementing the ideas presented here.  I would have liked to practice closures and function callback, but the main goal did not require use of them.  If I get the html/css finished it time and refactor for that, I may get to use these.


## Asynchronous operations and error management
- I only found potential need for 2 errors:  fetch errors and validating types in mathematical equations.  Each of these have their own error name which will return a custom error.
- For async, I used async and await for fetch operations, data conversion with await response.json().  Anything dealing with the retrieved data is handled through promise chaining, using .then().then() etc.  .catch is thrown at the end of the testing chain to catch and display any errors
- in async functions , use try-catch blocks for error catching, and in the promise chain I use .catch
