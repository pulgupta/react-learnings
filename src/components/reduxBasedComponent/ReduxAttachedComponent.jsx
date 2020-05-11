import React from "react";
import { connect } from "react-redux";

const ReduxAttachedComponent = (props) => {
  return <div><p>Counter value is {props.crt}</p>
  <button onClick={props.increment}>Increment Counter</button></div>;
};

const mapsStateToProps = (state) => {
  return {
    crt: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        increment : () => dispatch({
            type: 'INC_COUNTER'
        })
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(ReduxAttachedComponent);
