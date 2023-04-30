import { useState } from "react";
import { FaAddressBook, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={`bg-black h-screen fixed w-52 flex flex-col justify-normal px-2 items-center   ${
        nav ? "" : "hidden"
      } sm:block`}
    >
      <ul className="flex flex-col mt-16 pt-4">
        <li className="p-2">
          <Link
            to="/contacts"
            className=" text-3xl text-white hover:text-gray-300 flex items-center hover:scale-105 duration-300"
          >
            <FaAddressBook className="mr-2" />
            Contacts
          </Link>
        </li>
        <li className="p-2 pt-10">
          <Link
            to="/dashboard"
            className="text-3xl text-white hover:text-gray-300 flex items-center hover:scale-105 duration-300"
          >
            <FaChartLine className="mr-2" />
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
