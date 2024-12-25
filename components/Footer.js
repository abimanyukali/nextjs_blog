import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed insert-x-0 bottom-0 flex flex-col items-center bg-neutral-90 text-center text-white">
      <div
        className="w-full p-4 text-center"
        style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
      >
        {' '}
        @ 2024 ABIMANYU{' '}
      </div>
    </footer>
  );
};

export default Footer;
