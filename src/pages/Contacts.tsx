import { ContactCard } from "../components/ContactCard";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { FaTimesCircle } from "react-icons/fa";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

export const Contacts = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  console.log(contacts);
  console.log(contacts.length);

  return (
    <div className="w-full h-full flex flex-col place-items-center mt-18 pt-20 sm:mx-2 md:mx-2">
      <div className="py-4 mt-4">
        <h1 className="md:text-5xl font-bold text-center text-4xl">
          Recent Contacts
        </h1>
        <div className="pb-2">
          <Link
            to="/contact/add-contact"
            className="lg:text-4xl md:text-2xl text-xl font-medium mt-20 bg-blue-500 text-white px-4 py-4 rounded-md hover:bg-blue-600 mx-auto block w-max"
          >
            Create Contact
          </Link>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto p-4 place-items-center">
        {contacts.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
          <div className="bg-green-500 px-5 py-14 flex items-center mt-28">
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
