import React from 'react';

// Context API where we need to define the object with default values
const AppLabels = React.createContext({
    welcomeLabel: 'Read and learn react',
    name: 'Udemy course'
});

export default AppLabels;