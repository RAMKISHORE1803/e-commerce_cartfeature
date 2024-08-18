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
    <nav className="text-black p-4 md:p-6 h-[var(--navbar-height)] shadow-md flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <Image src={ikea} alt="ikea-icon" width={50} height={50} />
        </Link>

        {/* Mobile Icons */}
        <div className="md:hidden flex gap-4 items-center">
          <Image src={truck} alt="truck-icon" width={24} height={24} />
          <Image src={store} alt="store-icon" width={24} height={24} />
          <Image src={profile} alt="profile-icon" width={24} height={24} />
        </div>
      </div>

      <div className="hidden md:flex flex-grow justify-center mt-4 md:mt-0">
        <SearchBar />
      </div>

      <div className="flex gap-4 items-center mt-4 md:mt-0">
        <div className="hidden md:flex gap-2 items-center cursor-pointer">
          <Image src={truck} alt="truck-icon" width={24} height={24} />
          <span>Enter postal code</span>
        </div>
        <div className="hidden md:flex gap-2 items-center mr-4">
          <Image src={store} alt="store-icon" width={24} height={24} />
          <span>Select store</span>
        </div>

        <div className="flex gap-5 text-sm">
          <div className="hidden md:flex gap-2 cursor-pointer">
            <Image src={profile} alt="profile-icon" width={24} height={24} />
          </div>
          <div>
            <Image src={heart} alt="heart-icon" width={24} height={24} />
          </div>
          <Link href={"/shoppingcart"}>
            <Image src={cart} alt="cart-icon" width={24} height={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
