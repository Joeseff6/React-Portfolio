import React from 'react';
import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className="container-fluid">
    <NavBar />
    <Outlet />
  </div>
  )
}

export default Main;