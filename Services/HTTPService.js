import axios from 'axios';

const instance = axios.create({
  // BaseURL of every axios request
  baseURL: 'https://app.planetscale.com/jonathan-russ/crud-app',
});

export default instance;
