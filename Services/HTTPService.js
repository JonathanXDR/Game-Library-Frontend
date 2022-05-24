import axios from 'axios';

const instance = axios.create({
  // BaseURL of every axios request
  baseURL: 'https://crud-stack-full.herokuapp.com/',
});

export default instance;
