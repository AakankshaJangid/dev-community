import React from 'react';
import Navbar from '../home/Navbar';
import Sidebar from '../home/Sidebar';
import Footer from '../home/Footer';
import { useSession } from 'next-auth/react';
const Layout = ({ children }) => {
  const { data: session } = useSession();

  return (
    <div className="flex w-full bg-[#393E46]">
      <Sidebar />
      <div className="flex flex-col w-full justify-between overflow-y-scroll h-[100vh]">
        <Navbar user={session?.user?.name} />
        <main className="p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
