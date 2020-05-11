import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import PropTypes from "prop-types";
import axios from "axios";
import { Route, Switch, withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";

// This is an example of a class based components.
// We should avoid using them and should instead use functional components
// INHERITANCE: extends is used for inheritance

class MyComponent extends Component {
  constructor(props) {
    super(props); // Mandatory is we are using an explicit constructor
    console.log("This is called as the first life cycle method");
    // creating a reference. We still have to assign it to some control.
    this.buttonRef = React.createRef();
  }

  data = {};

  componentDidMount() {
    console.log("componentDidMount executed after the render method");
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log(response);
        this.data = response;
      });
    // Since componentDidMount is executed after render() we can now focus on the rendered button.
    this.buttonRef.current.click();
  }

  // STATE MANAGEMENT: The way to define component state in class based components
  state = {
    isClicked: false,
    isPatchProof: "tested",
  };

  // My event handler which we can use in our event controls
  myEventHandler = () => {
    // This is the correct way of setting the state.
    // Do not ever do this.state.isClicked = something as this is not the correct way.
    // React will not recognise this change and will not rerender the component
    // STATE UPDATES -> setState works by patching the change
    this.setState({
      isClicked: !this.state.isClicked,
    });
    console.log("In button click API data was ", this.data.data);
  };

  // Renders method should always return a valid JSX
  render() {
    return (
      <Aux>
        <nav>
          <ul>
            <li>
              <Link to="/class-component/sub-route1">Sub-route 1</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/sub-route2`}>Sub-route 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            path="/class-component/sub-route1"
            render={() => {
              return <h2>Route 1</h2>;
            }}
          />
          <Route
            path={`${this.props.match.url}/sub-route2`}
            render={() => {
              return <h2>Route 2</h2>;
            }}
          />
          {/**
           * This will make sure that in case a user is specifying anything other than route-1 and route-2 
           * then he will land on the second route so.
           * This will help in cases where we want to make sure that user is shown something even if he is 
           * entering some invalid route
           */}
          <Redirect from={`${this.props.match.url}/:any`} to={`${this.props.match.url}/sub-route2`} ></Redirect>
        </Switch>

        <div>
          <p>
            Just to show two divs at same order inside our own React.Fragment
          </p>
        </div>
        <div>
          {
            // way of linling a call without actually calling it
          }
          <button onClick={this.myEventHandler} ref={this.buttonRef}>
            Press Button
          </button>
          {this.state.isClicked && (
            // This shows that even after we set the partial state the remaining stuff is preserved and is not removed.
            <p>Button is pressed {this.state.isPatchProof}</p>
          )}
          <p>Hello : {this.props.name}</p>
          {this.props.children}
          {console.log('Props are', this.props)}
        </div>
      </Aux>
    );
  }
}

// This will just generate a warning but will not fail the build or run of the application
MyComponent.propTypes = {
  name: PropTypes.string,
};

export default withRouter(MyComponent);
