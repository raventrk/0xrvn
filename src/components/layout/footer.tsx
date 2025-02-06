"use client";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="text-sm font-medium fixed bottom-0 pb-4 text-gray-400 hover:text-white transition duration-300">
        <a className="flex items-center gap-2">
        {year} &copy; All rights reserved 
        </a>
      </footer>
    );
};

export default Footer;