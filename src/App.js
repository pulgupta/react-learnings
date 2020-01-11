import React from 'react';
import logo from './logo.svg';
import './App.css';

// Spread operator
// Same can be used with arrays

const person = {
  name: 'Tom'
}

// Even though objects are reference types in JS. Spread operator helps us in creating copies of data rather just referencing to the same data.
const secondPerson = {
  ...person,
  age: 45
}

// Object Destructuring
// Taking our a property from an object/array
const {age} = secondPerson;
// In case of array destructuring we would have used [] brackets
const [a] = ["Hello", "hi"]

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - Scroll Down
        </a>
      </header>
      <p>Spread Operator: {secondPerson.name}</p>
      <p>Object Destructuring: {age}, {a}</p>
    </div>
  );
}

export default App;
