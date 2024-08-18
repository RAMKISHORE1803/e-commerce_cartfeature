import Link from "next/link";
import Image from "next/image";
import ikea from "../icons/ikea.svg";
import SearchBar from "../SearchBar";
import truck from "../icons/truck.svg";
import store from "../icons/store.svg";
import profile from "../icons/profile.svg";
import heart from "../icons/heart.svg";
import cart from "../icons/cart.svg";

const Navbar = () => {
  return (
    <nav className="text-black p-6 mw-[100vw] h-[var(--navbar-height)] shadow-md flex-col md:flex lg:flex">
      {/* For mobile */}
      <div className="flex-col justify-between md:hidden lg:hidden">
        <div className="flex justify-between">
          <Link href="/" className="text-xl font-bold">
            <Image src={ikea} alt="ikea-icon" />
          </Link>
          <div className="flex gap-5 text-sm items-center mb-6">
            <div className="mr-4 flex gap-2 cursor-pointer">
              <Image src={profile} alt="profile-icon" />
            </div>
            <div>
              <Image src={heart} alt="heart-icon" />
            </div>
            <Link href={"/shoppingcart"}>
              <Image src={cart} alt="cart-icon" />
            </Link>
          </div>
        </div>
        <div className="mb-4">
          <SearchBar />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 cursor-pointer">
          <Image src={truck} alt="truck-icon" />
          <span>Enter postal code</span>
        </div>
        <div className="mr-4 flex gap-2">
          <Image src={store} alt="store-icon" />
          <span>Select store</span>
        </div>
      </div>

      {/* For desktop */}
      <div className="hidden md:flex lg:flex max-w-full mx-auto justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <Image src={ikea} alt="ikea-icon" />
        </Link>
        <SearchBar />
        <div className="flex gap-5 text-sm">
          <div className="flex gap-2 cursor-pointer">
            <Image src={truck} alt="truck-icon" />
            <span>Enter postal code</span>
          </div>
          <div className="mr-4 flex gap-2">
            <Image src={store} alt="store-icon" />
            <span>Select store</span>
          </div>
          <div className="mr-4 flex gap-2 cursor-pointer">
            <Image src={profile} alt="profile-icon" />
            <span>Hej! Log in</span>
          </div>
          <div>
            <Image src={heart} alt="heart-icon" />
          </div>
          <Link href={"/shoppingcart"}>
            <Image src={cart} alt="cart-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
