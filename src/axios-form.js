import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://testing-dbb51.firebaseio.com/'
});


export default instance;