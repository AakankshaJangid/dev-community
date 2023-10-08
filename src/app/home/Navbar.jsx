// components/Navbar.js
import Link from 'next/link';

const Navbar =({ user }) => {
  return (
    <nav className="bg-gradient-to-r from-cyan-600 to-teal-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <span className="text-white text-lg font-bold"></span>
          </Link>
        </div>
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <img
                src={user.image}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <Link href={'/user-profile'}><span className="text-white">{user.name}</span></Link>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link href="/login">
                <span clspanssName="text-white">Login</span>
              </Link>
              <Link href="/signup">
                <span className="text-white">Sign Up</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
