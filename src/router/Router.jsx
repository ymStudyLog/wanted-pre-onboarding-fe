import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

//서브라우트 - Outlat 적용하기
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="/main" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
