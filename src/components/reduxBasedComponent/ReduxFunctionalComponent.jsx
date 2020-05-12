import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import addAction from "../../modules/action/addAction";

const ReduxFunctionalComponent = (props) => {
  const ctr = useSelector((state) => state.counter);
  const hist = useSelector((state) => state.history);
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
      <div>
        <p>History of the updates</p>
        {hist.map((value) => {
          return (
            <ul>
              <li>{value}</li>
            </ul>
          )
        })}
      </div>
    </div>
  );
};

export default ReduxFunctionalComponent;
