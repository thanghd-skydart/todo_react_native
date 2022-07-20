export const isValidEmail = email => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const isValidatePassword = password => {
  console.log('check in pass' + password.lenght);
  return password.lenght > 3;
};
