import React, {Component} from "react";

class MyComponent extends Component {

    // The way to define component state in class based components
    state = {
        isClicked: false
    }

    // My event handler which we can use in our event controls
    myEventHandler = () => {
        // This is the correct way of setting the state.
        // Do not ever do this.state.isClicked = something as this is not the correct way React will not recognise this and will not rerender the component
        this.setState({
            isClicked:!this.state.isClicked
        })
    }

    // Renders method returns the JSX
    render() {
        return (
            <div>
                <button onClick={this.myEventHandler}>Press Button</button>
                {
                    this.state.isClicked && <p>Button is pressed</p>
                }
                <p>Hello : {this.props.name}</p>
                {this.props.children}
            </div>)
    }
}

export default MyComponent;