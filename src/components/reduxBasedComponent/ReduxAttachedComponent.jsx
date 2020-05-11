import React, { Component } from "react";
import { connect } from "react-redux";

class ReduxAttachedComponent extends Component {
  render() {
    return <div>Counter value is {this.props.crt}</div>;
  }
}

const mapsStateToProps = (state) => {
  return {
    crt: state.counter,
  };
};

export default connect(mapsStateToProps)(ReduxAttachedComponent);
