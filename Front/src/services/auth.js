export function signInServices() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'dfdfsfdsmkfojdfn',
        user: {
          name: 'Gabriel',
          email: 'gabrielheifel@gmail.com'
        },
      })
    }, 1000);
  });
}
