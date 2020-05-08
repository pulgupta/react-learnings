import React from "react";
import logo from "../assets/logo.svg";
import "./App.css";
import MyComponent from "../components/MyComponent/MyComponent";
import MyFuncComponent from "../components/MyFuncComponent/MyFunctionComponent";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import AppLabels from "../context/AppLabels";
import LabelWrapper from "../context/Labels";

// Spread operator
// Same can be used with arrays

const person = {
  name: "Tom",
};

// Even though objects are reference types in JS. Spread operator helps us in creating copies of data rather just referencing to the same data.
const secondPerson = {
  ...person,
  age: 45,
};

// Object Destructuring
// Taking our a property from an object/array
const { age } = secondPerson;
// In case of array destructuring we would have used [] brackets
const [a] = ["Hello", "hi"];

function App() {
  // We can pass method references to the child component.
  // In this way we can also communicate between two components

  const parentMethod = (name) => {
    console.log("Parent clicked", name);
  };

  return (
    <div className="App">
      <ErrorBoundary>
        <AppLabels.Provider
          value={{
            name: "React",
          }}
        >
          <header className="App-header">
            <LabelWrapper></LabelWrapper>
            <MyComponent name="John">
              <div>This is a child prop</div>
            </MyComponent>
            <MyFuncComponent click={parentMethod}></MyFuncComponent>

            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <p>Spread Operator: {secondPerson.name}</p>
          <p>
            Object Destructuring: {age}, {a}
          </p>
        </AppLabels.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
