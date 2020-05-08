import React, { Component } from 'react';
import AppLabels from './AppLabels';

class LabelWrapper extends Component {
    
    static labels = AppLabels;
    
    componentDidMount() {
        console.log('Labels.jsx')
        //console.log(this.labels.name)
    }
    
    render() {
    return <div>a</div>
    }
}

export default LabelWrapper;