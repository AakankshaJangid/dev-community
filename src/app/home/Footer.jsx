import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F96D00] text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
        <div className="flex space-x-4">
        <Image
          src="/github-line.png"
          width={20}
          height={20}
          alt="logo-img"
          className="rounded-full"
        />
        <Image
          src="/linkedin-box-line.png"
          width={20}
          height={20}
          alt="logo-img"
          className="rounded-full"
        />
        <Image
          src="/mail-line.png"
          width={20}
          height={20}
          alt="logo-img"
          className="rounded-full"
        />
        <Image
          src="/twitter-line.png"
          width={20}
          height={20}
          alt="logo-img"
          className="rounded-full"
        />
        </div>
        <p className="mt-4">
          © {new Date().getFullYear()} Developer Community Platform
        </p>
      </div>
    </footer>
  );
};

export default Footer;
