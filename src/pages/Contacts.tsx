import { ContactCard } from "../components/ContactCard";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { FaTimesCircle } from "react-icons/fa";

// Defining the interface for Contact
interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

// Defining the Contacts component
export const Contacts = () => {
  // Using the useSelector hook to get contacts data from the Redux store
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  // Rendering the Contacts component
  return (
    // Creating a container div
    <div className="w-full h-full flex flex-col place-items-center mt-18 pt-20 sm:mx-2 md:mx-2">
      <div className="py-4 mt-4">
        <h1 className="md:text-5xl font-bold text-center text-4xl">
          Recent Contacts
        </h1>
        <div className="pb-2">
          {/* Creating a link to add a new contact */}
          <Link
            to="/contact/add-contact"
            className="lg:text-4xl md:text-2xl text-xl font-medium mt-20 bg-blue-500 text-white px-4 py-4 rounded-md hover:bg-blue-600 mx-auto block w-max"
          >
            Create Contact
          </Link>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto lg:p-4 lg:mt-0 mt-4 place-items-center">
        {contacts.length ? (
          // Creating a grid to display all contacts
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-0">
            {/* Rendering ContactCard component for each contact */}
            {contacts.map((contact: Contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onEdit={() => {}}
                onDelete={() => {}}
              />
            ))}
          </div>
        ) : (
          // Displaying a message if no contacts found
          <div className="bg-green-500 mx-2 px-3 py-14 flex items-center mt-28">
            <FaTimesCircle size={72} className="text-white mr-4" />
            <p className="text-white text-2xl font-bold">
              No contacts found. <br />
              Please add a contact using the "Create Contact" button.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
