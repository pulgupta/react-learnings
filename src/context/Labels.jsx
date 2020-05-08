import React, { Component } from 'react';
import AppLabels from './AppLabels';

/**
 * A way to include context using the static property contextType in class based components
 * We can then access context using this.context
 * 
 * Also for functional components we have already demonstrated how to use useContext react hook 
 */
class LabelWrapper extends Component {
    
    // The value of this variable should always be contextType.
    static contextType = AppLabels;
    
    componentDidMount() {
        console.log('Labels.jsx')
        // It should always be named as context
        console.log(this.context.name)
    }
    
    render() {
    return <></>
    }
}

export default LabelWrapper;