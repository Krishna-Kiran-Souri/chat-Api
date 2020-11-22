let Email = (email) => {
  let emailregex = /^\w+([\.-]?\w)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.math(emailregex);
};

let Password = (password) => {
  let passwordregex = /^[A-Za-z0-9]\w{7,}$/;
  return password.match(passwordregex);
};

module.exports = {
  Email: Email,
  Password: Password
};
