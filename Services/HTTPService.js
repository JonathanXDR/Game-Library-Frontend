import axios from 'axios';

const instance = axios.create({
  // BaseURL of every axios request
  baseURL: 'https://crud-app-game.herokuapp.com/',
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      // Redirect to login page
      window.location.href = window.location.href + 'login';
    } else {
      return Promise.reject(error);
    }
  },
);

export default instance;