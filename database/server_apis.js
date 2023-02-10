exports.cloudLogIn = (username, password) => {
  return new Promise((resolve, reject) => {
    try {
      console.log("Username: " + username + "----Password :" + password)
      var today = new Date();
      date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      let data = {
        name: 'Mathew Francis',
        master_id: '8@5CszEWAAqq',
        last_login: date
      }
      console.log(data);
      resolve(data);
    } finally {

    }
  });
}