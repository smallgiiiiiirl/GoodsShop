import React from 'react';
import "./Apps.scss"
import 'antd/dist/reset.css';
import { Navigate, Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { MainPage } from '../pages/MainPage';
import { LayoutMain } from './LayoutMain';
import { ProductPage } from 'pages/ProductPage/ProductPage';
import { Basket } from 'pages/Basket';



export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LayoutMain />}>
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="/main" element={<Navigate to="/main/all" />} />
            <Route path='/main/:categoryName' element={<MainPage />} />
            <Route path="/main/:categoryName/:id" element={<ProductPage />} />
          </Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Route>
      </Routes>

    </div>
  );
}


