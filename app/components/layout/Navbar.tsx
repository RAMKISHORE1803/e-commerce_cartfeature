import Link from 'next/link';
import Image from 'next/image';
import ikea from '../icons/ikea.svg';
import SearchBar from '../SearchBar';
import truck from '../icons/truck.svg';
import store from '../icons/store.svg';
import profile from '../icons/profile.svg';
import heart from '../icons/heart.svg';
import cart from '../icons/cart.svg';

const Navbar = () => {
  return (
    <nav className="text-black p-6 w-full h-[var(--navbar-height)] shadow-md">
      <div className="max-w-full mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold"> <Image src={ikea} alt='ikea-icon'/></Link>
        <SearchBar/>
        <div className='flex gap-5 text-sm'>
          <div className='flex gap-2 cursor-pointer'><Image src={truck} alt='truck-icon'/><span>Enter postal code</span></div>
          <div className="mr-4 flex gap-2"><Image src={store} alt='store-icon'/><span>Select store</span></div>
          <div className="mr-4 flex gap-2 cursor-pointer"><Image src={profile} alt='profile-icon'/><span>Hej! Log in</span></div>
          <div><Image src={heart} alt='heart-icon'/></div>
          <Link href={"/shoppingcart"}><Image src={cart} alt='cart-icon'/></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
