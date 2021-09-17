// import axios from 'axios';

export default setupAxios = (axios, store) => {
  axios.defaults.baseURL = `'https://jsonplaceholder.typicode.com/`;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.interceptors.request.use(
    config => {
      const {authToken} = store.getState().authReducer;
      if (authToken) config.headers.Authorization = `${authToken}`;
      config.headers.post['Access-Control-Allow-Origin'] = '*';
      return config;
    },
    err => Promise.reject(err),
  );
  axios.interceptors.response.use(
    response => response,
    err => console.log('handle Error', err),
  );
};
