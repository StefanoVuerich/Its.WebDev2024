import axios from 'axios';

const get = (url) => {
    return axios.get(url)
        .then(response => response.data)
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

const post = (url, data) => {
    return axios.post(url, data)
        .then(response => response.data)
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

export default {
    get,
    post
}