import axios from 'axios';
import {getToken} from './account';

export const getApiUrl = (path) => {
    return `http://localhost:3002${path}`;
};

export const getHeaders = () => {
    const token = getToken();
    if(!token) return {};

    return {
        Authorization: `Bearer ${token}`
    };
};

export const apiPost = (path, data = {}) => {
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders()
    };

    console.log("post",data)
    return axios.post(url, data, options);
   
};

export const apiPut = (path, data = {}) => {
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders()
    };

    console.log("put",data)
    return axios.put(url, data, options);
   
};

export const apiGet = (path) => {
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders()
    };


    return axios.get(url, options);
};