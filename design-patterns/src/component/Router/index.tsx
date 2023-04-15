import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Compound from '../pages/Compound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>hello</div>} />
        <Route path="/compound-pattern" element={<Compound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
