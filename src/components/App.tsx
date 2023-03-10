import React from 'react';
import Apps from "./Apps.module.css"
import { Navigate, Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { MainPage } from '../pages/MainPage';
import { LayoutMain } from './LayoutMain';

export const App = () => {
  return (
    <div className={Apps.App}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LayoutMain />}>
            <Route path="/" element={<Navigate to="/main" />}></Route>
            <Route path="/main" element={<MainPage />}></Route>
          </Route>
        </Route>
      </Routes>

    </div>
  );
}


