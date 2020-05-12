import React from "react";
import { useSelector, useDispatch } from "react-redux";
import increment from "../../modules/action/incrementAction";

const ReduxFunctionalComponent = (props) => {
  const ctr = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter value using hooks is {ctr}</p>
      <button onClick={() => dispatch(increment())}>Increment Counter</button>
    </div>
  );
};

export default ReduxFunctionalComponent;
