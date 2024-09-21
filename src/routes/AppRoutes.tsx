import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { Home, Login, Profile } from '@/pages';
import { MenuApp } from '@/components/common';

const LayoutWithMenu: React.FC = () => {
  return (
    <>
      <MenuApp />
      <Outlet />
    </>
  );
};

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<LayoutWithMenu />}>
          <Route path="/inicio" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
