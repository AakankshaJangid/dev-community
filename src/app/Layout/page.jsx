import React from 'react';
import Navbar from '../home/Navbar';
import Sidebar from '../home/Sidebar';
import Footer from '../home/Footer';
const Layout = ({ children }) => {
  const user = {
    name: 'Aakanksha',
    image: '/dev-comm-logo.png'
  };
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 overflow-y-scroll h-[100vh]">
        <Navbar user={user} />
        <main className="p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;