import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  // State for showing/hiding mobile menu
  const [nav, setNav] = useState(false);

  // Function to toggle mobile menu
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {/* NavBar */}
      <div className="bg-black fixed left-0 top-0 w-full z-20 ease-in duration-300 ">
        <div className="max-w-[1920px] m-auto flex justify-between lg:justify-center md:justify-center items-center p-4 text-white px-10">
          {/* Logo */}
          <Link to="/">
            <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl cursor-pointer">
              COVID Contact Manager
            </h1>
          </Link>

          {/* Mobile Button */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>

          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 flex-col"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 flex-col"
            }
          >
            {/* Mobile menu items */}
            <ul>
              <li onClick={handleNav} className="p-4 text-4xl flex flex-col">
                <Link to="/">Home</Link>
              </li>
            </ul>

            <ul>
              <li onClick={handleNav} className="p-4 text-4xl flex flex-col">
                <Link to="/contacts">Contact</Link>
              </li>
            </ul>
            <ul>
              <li onClick={handleNav} className="p-4 text-4xl flex flex-col">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
