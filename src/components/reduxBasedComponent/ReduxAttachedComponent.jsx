import React from "react";
import { connect } from "react-redux";
import { Component } from "react";

class ReduxAttachedComponent extends Component {
  render() {
    return (
      <div>
        <p>Counter value is {this.props.crt}</p>
        <button onClick={this.props.increment}>Increment Counter</button>
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    crt: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () =>
      dispatch({
        type: "INC_COUNTER",
      }),
  };
};

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(ReduxAttachedComponent);
