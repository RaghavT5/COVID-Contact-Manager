import React from "react";
import { useDispatch } from "react-redux";
import { Contact } from "../redux/slices/contactsSlice";
import { updateContact, deleteContact } from "../redux/slices/contactsSlice";
import { ContactCard, ContactCardProps } from "./ContactCard";

interface Props extends ContactCardProps {
  contact: Contact;
}

// Define a component that will render a ContactCard
// The component is connected to the Redux store to be able to update and delete contacts
const ConnectedContactCard: React.FC<Props> = ({
  contact,
  onEdit,
  onDelete,
}) => {
  const dispatch = useDispatch();

  // Define a function to handle the edit button click
  // The function updates the contact status and dispatches an updateContact action
  const handleEditClick = () => {
    const updatedContact = {
      ...contact,
      status: contact.status === "active" ? "inactive" : "active",
    };
    onEdit(updatedContact);
    dispatch(updateContact(updatedContact));
  };

  // Define a function to handle the delete button click
  // The function deletes the contact from the Redux store and dispatches a deleteContact action
  const handleDeleteClick = () => {
    if (contact.id !== null && contact.id !== undefined) {
      onDelete(contact.id);
      dispatch(deleteContact(contact.id));
    }
  };

  // Render the ContactCard component with the appropriate props
  return (
    <ContactCard
      contact={contact}
      onEdit={handleEditClick}
      onDelete={handleDeleteClick}
    />
  );
};

// Export the ConnectedContactCard component as the default export of this module
export default ConnectedContactCard;
