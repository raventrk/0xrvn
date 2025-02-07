"use client";

import React from 'react';
import { useTheme } from '../ThemeProvider';

const Footer = () => {
  const year = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <footer className={`text-sm font-medium fixed bottom-0 w-full flex justify-center pb-4 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-black hover:text-gray-700'}`}>
        <div className="flex items-center gap-2">
          {year} &copy; All rights reserved 
        </div>
      </footer>
      <button onClick={toggleTheme} className="fixed bottom-2 right-4 flex text-white p-2 rounded">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </>
  );
};

export default Footer;