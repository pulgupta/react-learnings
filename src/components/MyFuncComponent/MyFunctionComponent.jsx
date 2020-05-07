import React, { useState } from "react";
import { useEffect } from "react";

// Notice that no where we are using this keywork here in case of functional component
const MyFuncComponent = props => {

  // Array destructuring is based on index and not by property name, so we can give any name
  // Use state return an array and so the first index of the returned array goes into compState and the second index 
  // - which is actually a method goes into setState
  const [compState, setState] = useState({
    isClicked: false,
    isPutProof: "tested"
  });

  useEffect(() => {
    console.log("useEffect executed")
  });

  const [name, setName] = useState('Initial State');
  // we can take event parameter here as well
  const myEventHandler = () => {
    setState({
      isClicked: !compState.isClicked
    });
  };

  // Way of expecting event object
  const myInputHandler = (event) => {
    // Two way binding step 1
    setName(event.target.value);
  }

  return (
    <>
      <button onClick={myEventHandler}>Press Button(func)</button>{" "}
      {compState.isClicked && (
        // Will not see the value of isPutProof as in case of functional components it is not a patch but a put.
        <div>Hello from functional component {compState.isPutProof}</div>
      )}
      {
        //This is the way of passing parameters to your methods. In this case as well we are not calling the method.
        // We are creating an annonamous method and passing the reference to that annonamous methood
      }
      <button onClick={() => props.click("Tom")}>
        Execute parent method(func)
      </button>

      <input name="name" onChange={myInputHandler} value={name}></input>
      {
        // Two way binding step 2
      }
      <p>{name}</p>
    </>
  );
};


export default MyFuncComponent;
