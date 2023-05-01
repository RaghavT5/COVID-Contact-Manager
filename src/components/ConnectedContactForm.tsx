import { useDispatch } from "react-redux";
import { Contact } from "../redux/slices/contactsSlice";
import { updateContact, deleteContact } from "../redux/slices/contactsSlice";
import { ContactCard } from "./ContactCard";

interface Props {
  contact: Contact;
  handleEdit: (contact: Contact) => void;
  handleDelete: (contactId: number) => void;
}

// Define the ConnectedContactCard component and its props
const ConnectedContactCard: React.FC<Props> = ({
  contact,
  handleEdit,
  handleDelete,
}) => {
  // Get the dispatch function from the redux store
  const dispatch = useDispatch();

  // Handle the click event when the edit button is clicked
  const handleEditClick = () => {
    // Create a new contact object with the updated status
    const updatedContact = {
      ...contact,
      status: contact.status === "active" ? "inactive" : "active",
    };
    // Call the handleEdit function with the updated contact object
    handleEdit(updatedContact);
    // Dispatch the updateContact action with the updated contact object
    dispatch(updateContact(updatedContact));
  };

  // Handle the click event when the delete button is clicked
  const handleDeleteClick = () => {
    // Check if the contact ID is not null or undefined
    if (contact.id !== undefined && contact.id !== null) {
      // Call the handleDelete function with the contact ID
      handleDelete(contact.id);
      // Dispatch the deleteContact action with the contact ID
      dispatch(deleteContact(contact.id));
    }
  };

  // Render the ContactCard component with the contact object and the event handlers
  return (
    <ContactCard
      contact={contact}
      onEdit={handleEditClick}
      onDelete={handleDeleteClick}
    />
  );
};

// Export the ConnectedContactCard component as the default export
export default ConnectedContactCard;
