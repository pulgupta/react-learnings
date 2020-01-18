import React, { useState } from "react";

// Notice that no where we are using this keywork here in case of functional component
const MyFuncComponent = props => {
  // Array destructuring is based on index and not by property name, so we can give any name
  const [compState, setState] = useState({
    isClicked: false,
    isPutProof: "tested"
  });

  const myEventHandler = () => {
    setState({
      isClicked: !compState.isClicked
    });
  };

  return (
    <>
      <button onClick={myEventHandler}>Press Button(func)</button>{" "}
      {compState.isClicked && (
        // Will not see the value of isPutProof as in case of functional components it is not a patch but a put.
        <div>Hello from functional component {compState.isPutProof}</div>
      )}
      {
        //This is the way of passing parameters to your methods. In this case as well we are not calling the methid.
        // We are creating an annonamous method and passing the reference to that annonamous methood
      }
      <button onClick={() => props.click("Tom")}>
        Execute parent method(func)
      </button>
    </>
  );
};

export default MyFuncComponent;
