import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 lg:w-screen md:w-3/4 lg:ml-0 md:ml-48">
      <h1 className="text-5xl font-bold mb-4 text-center text-blue-500">
        Welcome to COVID Contact Manager
      </h1>
      <p className="text-xl font-semibold text-center text-gray-600 mb-8">
        Keep track of your contacts and their COVID status.
      </p>
      <Link
        to="/contacts"
        className="text-xl py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full shadow-lg transition duration-300"
      >
        Manage Contacts
      </Link>
    </div>
  );
};

export default Home;
