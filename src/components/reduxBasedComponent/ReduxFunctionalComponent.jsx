import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import addAction from "../../modules/action/addAction";

const ReduxFunctionalComponent = (props) => {
  const ctr = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [inc, setInc] = useState(10);
  const valueEventHandler = (event) => {
    setInc(event.target.value);
  };

  return (
    <div>
      <p>Counter value using hooks is {ctr}</p>
      <div>
        <input name="inc_value" value={inc} onChange={valueEventHandler} />
      </div>
      <button onClick={() => dispatch(addAction(parseInt(inc)))}>
        Add value to Counter
      </button>
    </div>
  );
};

export default ReduxFunctionalComponent;
