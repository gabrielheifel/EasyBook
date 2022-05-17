import mock from '../utils/mock';

mock.onPost('/api/EasyBook/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);
  

  return [200, {}]
});