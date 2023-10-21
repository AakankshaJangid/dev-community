// components/Navbar.js
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const Navbar =({ user }) => {
  console.log(user);
  return (
    <nav className="bg-[#F96D00] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <span className="text-white text-lg font-bold"></span>
          </Link>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={'/dev-comm-logo.png'}
                alt={user}
                className="w-8 h-8 rounded-full"
              />
              <Link href={'/user-profile'}><span className="text-white">{user}</span></Link>
            </div>
            <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="text-red-500 bg-white text-xs font-bold px-6 py-2 rounded-sm"
        >
          Log Out
        </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
