import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateContact, Contact } from "../redux/slices/contactsSlice";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { RootState } from "../redux/store";

interface EditContactFormData {
  firstName: string;
  lastName: string;
  status: string;
}

export const EditContactForm = () => {
  const { id } = useParams<{ id?: string }>();
  const parsedId = id ? parseInt(id, 10) : 0;

  const [formData, setFormData] = useState<EditContactFormData>({
    firstName: "",
    lastName: "",
    status: "active",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const currentContact = contacts.find((contact) => contact.id === +parsedId);

  useEffect(() => {
    if (currentContact) {
      setFormData(currentContact);
    }
  }, [currentContact]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.status) {
      toast.warning("All fields are required.");
      return;
    }
    dispatch(updateContact({ ...formData, id: parsedId }));
    toast.success("Contact updated successfully!");
    setTimeout(() => {
      navigate("/contacts");
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen mt-8">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="w-full max-w-sm">
            <FaUser size={64} className="mb-4 mx-auto text-blue-500" />
            <h1 className="text-4xl font-bold mb-10 text-center">
              Edit Contact
            </h1>
            <form onSubmit={handleSubmit} className="text-2xl">
              <div className="mb-5">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      firstName: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="mb-5">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      lastName: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 font-bold mb-2">
                  Status
                </label>
              </div>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  name="status"
                  value="active"
                  checked={formData.status === "active"}
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      status: e.target.value,
                    }));
                  }}
                />
                <label className="block text-gray-700 font-bold mb-2">
                  Active
                </label>
              </div>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={formData.status === "inactive"}
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      status: e.target.value,
                    }));
                  }}
                />
                <label className="block text-gray-700 font-bold mb-2">
                  Inactive
                </label>
              </div>
              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mr-5"
                >
                  Update Contact
                </button>
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContactForm;
