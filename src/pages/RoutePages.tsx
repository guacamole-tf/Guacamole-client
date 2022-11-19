import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/pages/Main';
import NotFound from '@/pages/NotFound';

const RoutePages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default RoutePages