import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-31b28.firebaseio.com/'
});

export default instance;