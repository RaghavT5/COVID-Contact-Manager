import { useDispatch } from "react-redux";
import { Contact } from "../redux/slices/contactsSlice";
import { updateContact, deleteContact } from "../redux/slices/contactsSlice";
import { ContactCard } from "./ContactCard";

interface Props {
  contact: Contact;
  handleEdit: (contact: Contact) => void;
  handleDelete: (contactId: number) => void;
}

const ConnectedContactCard: React.FC<Props> = ({
  contact,
  handleEdit,
  handleDelete,
}) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    const updatedContact = {
      ...contact,
      status: contact.status === "active" ? "inactive" : "active",
    };
    handleEdit(updatedContact);
    dispatch(updateContact(updatedContact));
  };

  const handleDeleteClick = () => {
    if (contact.id !== undefined && contact.id !== null) {
      handleDelete(contact.id);
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
