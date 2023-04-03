import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';

const Root = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Root;
