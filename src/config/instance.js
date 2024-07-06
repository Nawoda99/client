import axios from 'axios';


const hosname = window.location.hostname;

const instance = axios.create({
  // baseURL: hosname == 'localhost' ? 'http://localhost:3000/' : 'https://api.hexagonasia.com/',
  baseURL:'http://localhost:3001/'
    // hosname == 'localhost' || hosname == '192.168.1.6'
    //   ? 'http://localhost:5000/'
    //   : hosname == 'erp.hexagonasia.com'
    //   ? 'https://api.hexagonasia.com/'
    //   : hosname == 'develop.hexagonasia.com'
    //   ? 'https://api.hexagonasia.com/api/development'
    //   : 'https://api.hexagonasia.com/',

  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false
  // })
});

//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.defaults.headers = {
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
  'Access-Control-Max-Age': '7200',
};

instance.interceptors.request.use(
  (request) => {
    // request.headers.authorization = `Bearer ${localStorageService.getItem(
    //   'ACCESS_TOKEN'
    // )}`;
    return request;
  },
  (error) => {
    alert('Please check your internt connection or contact administrator')
    // swal
    //   .fire({
    //     title: 'Error!',
    //     text: 'Please check your internt connection or contact administrator',
    //     icon: 'error',
    //     confirmButtonText: 'Cool',
    //   })
    //   .then((result) => {
    //     if (result.isConfirmed) {
    //       if (
    //         !localStorage.getItem('CompaneyId') ||
    //         !localStorage.getItem('jwt_token')
    //       ) {
    //         localStorage.clear();
    //         window.location = '/session/signin';
    //       }
    //     }
    //   });

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error?.response?.status;
    if (status === 401 || status === 403) {
        alert('Unauthorized to perform this action')
    //   swal
    //     .fire({
    //       title: 'Error!',
    //       text: 'Unauthorized to perform this action',
    //       icon: 'error',
    //       confirmButtonText: 'Close',
    //     })
    //     .then((result) => {
    //       window.localStorage.clear();
    //       window.location = '/session/signin';
    //     });
      return;
    }

    // swal
    //   .fire({
    //     title: 'Error!',
    //     text: 'Please check your internt connection or contact administrator',
    //     icon: 'error',
    //     confirmButtonText: 'Cool',
    //   })
    //   .then((result) => {
    //     if (
    //       !localStorage.getItem('CompaneyId') ||
    //       !localStorage.getItem('jwt_token')
    //     ) {
    //       localStorage.clear();
    //       window.location = '/session/signin';
    //     }
    //   });

    return Promise.reject(error);
  }
);

export default instance;