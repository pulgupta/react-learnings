import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import axios from "axios";

/**
 * This interceptor will work on request and will handle both success and error cases.
 */
axios.interceptors.request.use(
  (request) => {
    console.log("This is request inside our interceptor", request);
    return request;
  },
  (error) => {
    console.log("This is inside the request error case of our interceptor");
    return Promise.reject(error);
  }
);

/**
 * This interceptor will work on response and will handle both success and error cases.
 */
axios.interceptors.response.use(
  (response) => {
    console.log("This is response inside our interceptor", response);
    return response;
  },
  (error) => {
    console.log("This is inside the response error case of our interceptor");
    return Promise.reject(error);
  }
);
/**
 * In both the cases above we have eject method. We can take the reference of the interceptor in a
 * variable and then use that reference to remove the interceptor by calling eject on that reference
 * We can also use `axios.defaults.baseURL to set the parent url for our server`
 * We can even set headers by using this defaults object
 */

ReactDOM.render(<App />, document.getElementById("root"));
