//유효성 검사 정규표현식
// ID : /[a-zA-Z0-9._\-+]+@[a-zA-Z0-9._\-+]+\.[a-zA-Z0-9._\-+]+/
// PW : /(?=.*[A-Z])(?=.*[0-9])(?=.*[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+])/ + 길이 8 이상

const regMap = {
  username: /[a-zA-Z0-9._\-+]+@[a-zA-Z0-9._\-+]+\.[a-zA-Z0-9._\-+]+/,
  password: /(?=.*[A-Z])(?=.*[0-9])(?=.*[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+])/,
};

export const validation = (name, value) => {
  const reg = regMap[name];
  if ((name === 'username') | (name === 'password' && value.length >= 8)) {
    return reg.test(value); //true/false
  } else {
    return false;
  }
};
