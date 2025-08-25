import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './config/Layout';
import Home from './components/HomePage/Home';
import About from './components/PageAbout/About';
import PageLogin from './components/page-1/page1';
import Login from './components/PageLogin/Login';
import Contact from './components/PageContact/Contact';
import WishList from './components/PageWishList/WishList';
import Account from './components/PageAccaunt/Account';
import Products from './components/PageProduct/Products';
import Info from './components/PageInfo/Info';
import Bascet from './components/PageBacket/Bascet';
import NoteFounde from './components/PageNotFound/NoteFounde';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="singup" element={<PageLogin />} />
        <Route path="about" element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='contact' element={<Contact />} />
        <Route path='wishlist' element={<WishList />} />
        <Route path='account' element={<Account />} />
        <Route path='product' element={<Products />} />
        <Route path='info/:id' element={<Info />} />
        <Route path='bascet' element={<Bascet />} />
        <Route path='*' element={<NoteFounde/>} />
      </Route>
    </Routes>
  );
}

export default App;
