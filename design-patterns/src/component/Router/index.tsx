import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompoundPage from '../pages/Compound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>hello</div>} />
        <Route path="/compound-pattern" element={<CompoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
