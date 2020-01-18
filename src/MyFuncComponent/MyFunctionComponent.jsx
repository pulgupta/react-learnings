import React, { useState } from "react";

const MyFuncComponent = props => {
  // Array destructuring is based on index and not by property name, so we can give any name
  const [compState, setState] = useState({
    isClicked: false,
    isPutProof: "tested"
  });

  const myEventHandler = () => {
    setState({
      isClicked: !compState.isClicked,
    });
  };

  return (
    <>
      <button onClick={myEventHandler}>Press Button(func)</button>{" "}
      {compState.isClicked && (
          // Will not see the value of isPutProof as in case of functional components it is not a patch but a put.
        <div>Hello from functional component {compState.isPutProof}</div>
      )}
    </>
  );
};

export default MyFuncComponent;
