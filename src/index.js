import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/globalStyles';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './modules/index';

const store = createStore(rootReducer, composeWithDevTools());

function checkLocalStorage() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;
    //새로고침후에는 폼이 전부 리셋되므로 localStorage 체크해서 있으면 -> 임시 로그인하게 리덕스 auth?user?(로그인 성공시)에 값을 다시 저장하는 작업
    //의문점: (이 단계가 필요한가? 액션을 새로 만들까? user-단순 폼 값 저장, auth-로그인 성공 인데 localStorage는 user로 저장하는게 맞나..? 비밀번호를 localStorage에 저장하면 안되지 않ㅎ나)
  } catch (e) {
    console.log('localStorage is empty or localStorage error');
  }
}

checkLocalStorage();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
