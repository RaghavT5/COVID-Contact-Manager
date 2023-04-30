import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/slices/contactsSlice";
import { Contact } from "../redux/slices/contactsSlice";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

interface AddContactFormData {
  firstName: string;
  lastName: string;
  status: string;
}

export const AddContactForm = () => {
  const [formData, setFormData] = useState<AddContactFormData>({
    firstName: "",
    lastName: "",
    status: "active",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.status) {
      toast.warning("All fields are required.");
      return;
    }
    const newContact: Contact = { ...formData, id: 0 };
    dispatch(addContact(newContact));
    toast.success("Contact added successfully!");
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
              Add Contact
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
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContactForm;
