import { useState } from "react";
import { FaAddressBook, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

// Component for the app sidebar
const SideBar = () => {
  // Use state hook to manage the navigation state
  const [nav, setNav] = useState(false);

  // Function to toggle the navigation state
  const handleNav = () => {
    setNav(!nav);
  };

  // Return the JSX for the sidebar
  return (
    <nav
      // Apply Tailwind CSS classes to the nav element
      className={`bg-black z-20 h-screen fixed lg:w-52 flex flex-col justify-normal px-2 items-center md:w-48  ${
        nav ? "" : "hidden"
      } sm:block`}
    >
      <ul className="flex flex-col mt-16 pt-4">
        {/* Link to the Contacts page */}
        <li className="p-2">
          <Link
            to="/contacts"
            // Apply Tailwind CSS classes to the Link element
            className=" text-3xl text-white hover:text-gray-300 flex items-center hover:scale-105 duration-300 md:text-2xl"
          >
            {/* Contacts icon */}
            <FaAddressBook className="mr-2" />
            Contacts
          </Link>
        </li>
        {/* Link to the Dashboard page */}
        <li className="p-2 pt-10">
          <Link
            to="/dashboard"
            // Apply Tailwind CSS classes to the Link element
            className="text-3xl text-white hover:text-gray-300 flex items-center hover:scale-105 duration-300 md:text-2xl"
          >
            {/* Dashboard icon */}
            <FaChartLine className="mr-2" />
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
