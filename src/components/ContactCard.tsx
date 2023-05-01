import { Contact, deleteContact } from "../redux/slices/contactsSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaExternalLinkAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

export interface ContactCardProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (contactId: number) => void;
}

export const ContactCard = ({
  contact,
  onEdit,
  onDelete,
}: ContactCardProps) => {
  const firstNameInitial = contact.firstName.substring(0, 1);
  const statusColor =
    contact.status === "active" ? "text-red-600" : "text-green-600";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    onEdit(contact);
    navigate(`/contact/edit-contact/${contact.id}`, {
      state: { contact },
    });
  };

  const handleDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete the contact? This action is permanent."
      )
    ) {
      dispatch(deleteContact(contact.id));
    }
  };

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
        <button onClick={handleEdit}>
          <FaEdit
            size={32}
            className="hover:scale-125 duration-300 text-blue-700"
          />
        </button>
        <button onClick={handleDelete}>
          <FaTrashAlt
            size={30}
            className="hover:scale-125 duration-300 text-red-700"
          />
        </button>
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
