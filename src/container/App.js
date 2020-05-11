import React from "react";
import "./App.css";
import MyComponent from "../components/MyComponent/MyComponent";
import MyFuncComponent from "../components/MyFuncComponent/MyFunctionComponent";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import AppLabels from "../context/AppLabels";
import LabelWrapper from "../context/Labels";
import { Route, Link } from "react-router-dom";
import ReduxAttachedComponent from "../components/reduxBasedComponent/ReduxAttachedComponent";

// Spread operator
// Same can be used with arrays
const person = {
  name: "Tom",
};

// Even though objects are reference types in JS. Spread operator helps us in creating
// copies of data rather just referencing to the same data.
const secondPerson = {
  ...person,
  age: 45,
};

// Object Destructuring
// Taking our a property from an object/array
const { age } = secondPerson;
// In case of array destructuring we would have used [] brackets
const [a] = ["Hello", "hi"];

const App = (props) => {
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
          <nav>
            <ul>
              <li>
                <Link to="/class-component">Class based components</Link>
              </li>
              <li>
                <Link to="/functional-component">Functional components</Link>
              </li>
              <li>
                <Link to="/redux-component">Redux based components</Link>
              </li>
            </ul>
          </nav>
          <header className="App-header">
            <LabelWrapper></LabelWrapper>
            <p>{`Spread Operator: ${secondPerson.name}. Object Destructuring: ${age}, ${a}`}</p>
            <Route
              path="/class-component"
              render={() => (
                <MyComponent name="John">
                  <div>This is a child prop</div>
                </MyComponent>
              )}
            />
            <Route
              path="/functional-component"
              exact
              render={() => (
                <MyFuncComponent click={parentMethod}></MyFuncComponent>
              )}
            />
            <Route
              path="/redux-component"
              render={() => <ReduxAttachedComponent />}
            />
          </header>
        </AppLabels.Provider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
