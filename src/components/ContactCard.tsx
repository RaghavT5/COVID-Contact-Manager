import { Contact, deleteContact } from "../redux/slices/contactsSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaExternalLinkAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

// Define the ContactCardProps interface
export interface ContactCardProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (contactId: number) => void;
}

// Define the ContactCard component
export const ContactCard = ({
  contact,
  onEdit,
  onDelete,
}: ContactCardProps) => {
  // Get the first initial of the first name
  const firstNameInitial = contact.firstName.substring(0, 1);
  // Determine the color of the contact's status based on their status value
  const statusColor =
    contact.status === "active" ? "text-red-600" : "text-green-600";

  // Get the useDispatch and useNavigate hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define the handleEdit function to navigate to the edit contact page
  const handleEdit = () => {
    // Call the onEdit function with the contact object
    onEdit(contact);
    // Navigate to the edit contact page with the contact object as state
    navigate(`/contact/edit-contact/${contact.id}`, {
      state: { contact },
    });
  };

  // Define the handleDelete function to delete the contact
  const handleDelete = () => {
    // Display a confirmation message before deleting the contact
    if (
      window.confirm(
        "Are you sure you want to delete the contact? This action is permanent."
      )
    ) {
      // Dispatch the deleteContact action with the contact ID as argument
      dispatch(deleteContact(contact.id));
    }
  };

  // Render the ContactCard component
  return (
    <div className="bg-gray-100 drop-shadow-lg rounded-lg p-4 w-80 h-56 mx-6 mt-10">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-2xl font-bold">
        {firstNameInitial}
      </div>
      <h2 className="text-2xl font-bold mt-4">
        {contact.firstName} {contact.lastName}
      </h2>
      <p className={`text-xl font-bold mt-2 ${statusColor}`}>
        Status: {contact.status}
      </p>
      <span className="flex justify-around mt-5">
        {/* Render the edit button */}
        <button onClick={handleEdit}>
          <FaEdit
            size={32}
            className="hover:scale-125 duration-300 text-blue-700"
          />
        </button>
        {/* Render the delete button */}
        <button onClick={handleDelete}>
          <FaTrashAlt
            size={30}
            className="hover:scale-125 duration-300 text-red-700"
          />
        </button>
        {/* Render the view details button */}
        <Link to={`/contacts/${contact.id}`} className="">
          <FaExternalLinkAlt
            size={30}
            className="hover:scale-125 duration-300"
          />
        </Link>
      </span>
    </div>
  );
};
