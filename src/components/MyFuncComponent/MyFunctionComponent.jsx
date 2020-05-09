import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import AppLabels from "../../context/AppLabels";
import Aux from "../../hoc/Aux";
import { Button } from "./MyFunctionComponen.styles";
import axios from "axios";
import { withRouter } from "react-router";

// Notice that no where we are using this keywork here in case of functional component
const MyFuncComponent = (props) => {
  // Array destructuring is based on index and not by property name, so we can give any name
  // Use state return an array and so the first index of the returned array goes into compState and the second index
  // - which is actually a method goes into setState
  const [compState, setState] = useState({
    isClicked: false,
    isPutProof: "tested",
  });

  const inputRef = useRef();
  const context = useContext(AppLabels);
  // The second parameter passed to useEffect tells us which properties should change for useEffect to trigger again
  // Also we can have any number of use effect in our single component.
  useEffect(() => {
    console.log("useEffect executed for first load");
    inputRef.current.focus();
    console.log("Context value is " + context.name);

    return () => {
      console.log("clean up method for unload");
    };
  }, [context.name]);

  // use effect will be executed only for props change
  useEffect(() => {
    console.log("useEffect executed only for props change and component load");
  }, [props]);

  // Use effect will be executed for each update as we are not passing the second parameter
  useEffect(() => {
    console.log("useEffect executed for each update(re-render)");
    return () => {
      console.log("clean up method for each render");
    };
  });

  const [name, setName] = useState("Initial State");
  // we can take event parameter here as well
  const myEventHandler = () => {
    setState({
      isClicked: !compState.isClicked,
    });
  };

  // Way of expecting event object
  const myInputHandler = (event) => {
    // Two way binding step 1
    setName(event.target.value);
  };

  const handlePostData = (data) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Aux>
      <AppLabels.Consumer>
        {(context) => (
          <button onClick={myEventHandler}>
            Press Button(func) {context.name}{" "}
          </button>
        )}
      </AppLabels.Consumer>
      {
      compState.isClicked && (
        // Will not see the value of isPutProof as in case of functional components it is not a patch but a put.
        <div>Hello from functional component {compState.isPutProof}</div>
      )}
      {
        console.log('props are ', props)
        //This is the way of passing parameters to your methods. In this case as well we are not calling the method.
        // We are creating an annonamous method and passing the reference to that annonamous methood
      }
      <Button onClick={() => props.click("Tom")}>
        Execute parent method(func)
      </Button>
      <input
        name="name"
        onChange={myInputHandler}
        value={name}
        ref={inputRef}
      ></input>
      {
        // Two way binding step 2
      }
      <p>{name}</p>

      <Button
        onClick={() =>
          handlePostData({
            name: "Tom",
            age: 10,
          })
        }
      >
        Post data to server
      </Button>
    </Aux>
  );
};

// Memo will make sure that this component will only be loaded if the props are not changed.
// This will help in cases where the parent is re-rendering but since props are not changed
// we can save on unnecessary re-rendering of the child components.

// The other things which we are using here is the withRouter HOC.
// This HOC makes sure that we are able to access the router related props down the component 
// chain. In this case we have attached an inline component with our router still just by adding
// withRouter I am able to access the router releated props like history etc
export default withRouter(React.memo(MyFuncComponent));
