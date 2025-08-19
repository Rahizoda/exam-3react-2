import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './config/Layout';
import Home from './components/HomePage/Home';
import About from './components/PageAbout/About';
import PageLogin from './components/page-1/page1';
import Login from './components/PageLogin/Login';
import Contact from './components/PageContact/Contact';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="singup" element={<PageLogin />} />
        <Route path="about" element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='contact' element={ <Contact/>} />
      </Route>
    </Routes>
  );
}

export default App;
