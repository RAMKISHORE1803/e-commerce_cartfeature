// src/components/Navbar.tsx

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 z-100 fixed w-full h-[var(--navbar-height)] shadow-xl">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">MyEcommerce</Link>
        <div>
          <Link href="/products" className="mr-4">Products</Link>
          <Link href="/cart" className="mr-4">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
