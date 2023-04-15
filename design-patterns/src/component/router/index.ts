import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const Router = () => {
  return createBrowserRouter([
    {
      path: '/',
    },
    {
      path: '/compound-patterns',
    },
  ]);
};

export default Router;
