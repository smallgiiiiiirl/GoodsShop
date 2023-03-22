import React from 'react';
import "./Apps.scss"
import 'antd/dist/reset.css';
import { Navigate, Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { MainPage } from '../pages/MainPage';
import { LayoutMain } from './LayoutMain';
import { ProductCard } from 'pages/ProductPage/ProductPage';
import { Basket } from 'pages/Basket';



export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LayoutMain />}>
            <Route path="/" element={<Navigate to="/main" />}></Route>
            <Route path="/main" element={<Navigate to="/main/all" />}></Route>
            <Route path='/main/:categoryName' element={<MainPage />}></Route>
            <Route path='/main/:categoryName/:productName' element={<ProductCard price='' label='' imgLink='' description='' id='' />}></Route>
          </Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Route>
      </Routes>

    </div>
  );
}


