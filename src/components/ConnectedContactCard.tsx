import React from "react";
import { useDispatch } from "react-redux";
import { Contact } from "../redux/slices/contactsSlice";
import { updateContact, deleteContact } from "../redux/slices/contactsSlice";
import { ContactCard, ContactCardProps } from "./ContactCard";

interface Props extends ContactCardProps {
  contact: Contact;
}

const ConnectedContactCard: React.FC<Props> = ({
  contact,
  onEdit,
  onDelete,
}) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    const updatedContact = {
      ...contact,
      status: contact.status === "active" ? "inactive" : "active",
    };
    onEdit(updatedContact);
    dispatch(updateContact(updatedContact));
  };

  const handleDeleteClick = () => {
    if (contact.id !== null && contact.id !== undefined) {
      onDelete(contact.id);
      dispatch(deleteContact(contact.id));
    }
  };

  return (
    <ContactCard
      contact={contact}
      onEdit={handleEditClick}
      onDelete={handleDeleteClick}
    />
  );
};

export default ConnectedContactCard;
