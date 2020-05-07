import React, { Component } from "react";

class ErrorBoundary extends Component {

    state = {
        hasErrors: false,
        ErrorMessage: ""
    };

    // This will catch the error when thrown by the child component
    // Example throw new Error();
    componentDidCatch = (error) => {
        this.setState({
            hasErrors: true,
            ErrorMessage: error
        })
    }

    render() {
        if(this.state.hasErrors) {
            return <div>Something went wrong</div>
        } else {
            return this.props.children
        }
    }

}

export default ErrorBoundary;