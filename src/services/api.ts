import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bible365.herokuapp.com',
});

export { api };
