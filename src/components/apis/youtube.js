import axios from 'axios';
const KEY = 'AIzaSyDKvjkzq48Wxe1hU9YmJ_hcLPyokXRPmEo';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});
