import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-recipe-book-f6297.firebaseio.com/'
});

export default instance;