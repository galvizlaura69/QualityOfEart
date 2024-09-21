import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages';
import { MenuApp } from '@/components/common';

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <MenuApp />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
};
