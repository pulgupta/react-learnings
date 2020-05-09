import axios from 'axios';

/**
 * Say we have two different API which we need to call from our frontend.
 * In such a case we can create different axios instance for different APIs.
 */
const axiosMiddleware = axios.create({
    baseURL: 'someRandomUrl',
    maxRedirects: 4
});
// Setting interceptor on an instance
axiosMiddleware.interceptors.request.use((request) => {
    console.log(request);
})

const axiosAuth = axios.create({
    baseURL: 'someRandomUrl',
    maxRedirects: 4
});

axiosAuth.interceptors.request.use((request) => {
    console.log(request);
})

export { axiosMiddleware, axiosAuth };