import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log('This is request inside our interceptor', request);
    return request;
}, error => {
    console.log('This is inside the request error case of our interceptor')
    return Promise.reject(error);
});


axios.interceptors.response.use(response => {
    console.log('This is response inside our interceptor', response);
    return response;
}, error => {
    console.log('This is inside the response error case of our interceptor')
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
