// ID : /(?:.*[\@].*[\.].*)/g
// PW : /(?=.*[A-Z])(?=.*[0-9])(?=.*[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+])/g + 길이 8 이상

//유효성 검사 정규표현식
const regMap = {
  username: /(?:.*[\@].*[\.].)/g, //id 정규식 수정 : .뒤에 문자 개수에 따라 결과가 바뀜=원래 바뀌면 안됨.
  password: /(?=.*[A-Z])(?=.*[0-9])(?=.*[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+])/g,
};

export const validation = (name, value) => {
  const reg = regMap[name];
  if ((name === 'username') | (name === 'password' && value.length >= 8)) {
    return reg.test(value); //true/false
  } else return false;
};
