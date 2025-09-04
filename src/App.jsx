import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './config/Layout';

// lazy imports
const Home = lazy(() => import('./components/HomePage/Home'));
const About = lazy(() => import('./components/PageAbout/About'));
const PageLogin = lazy(() => import('./components/page-1/page1'));
const Login = lazy(() => import('./components/PageLogin/Login'));
const Contact = lazy(() => import('./components/PageContact/Contact'));
const WishList = lazy(() => import('./components/PageWishList/WishList'));
const Account = lazy(() => import('./components/PageAccaunt/Account'));
const Products = lazy(() => import('./components/PageProduct/Products'));
const Info = lazy(() => import('./components/PageInfo/Info'));
const Bascet = lazy(() => import('./components/PageBacket/Bascet'));
const NoteFounde = lazy(() => import('./components/PageNotFound/NoteFounde'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="singup" element={<PageLogin />} />
          <Route path="about" element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='contact' element={<Contact />} />
          <Route path='wishlist' element={<WishList />} />
          <Route path='account' element={<Account />} />
          <Route path='product' element={<Products />} />
          <Route path='info/:id' element={<Info />} />
          <Route path='bascet' element={<Bascet />} />
          <Route path='*' element={<NoteFounde />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
