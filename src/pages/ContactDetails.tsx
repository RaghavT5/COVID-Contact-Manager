import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RootState } from "../redux/store";

interface ContactDetailsData {
  firstName: string;
  lastName: string;
  status: string;
}

export const ContactDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const parsedId = id ? parseInt(id, 10) : 0;

  const [formData, setFormData] = useState<ContactDetailsData>({
    firstName: "",
    lastName: "",
    status: "active",
  });

  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const currentContact = contacts.find((contact) => contact.id === +parsedId);

  useEffect(() => {
    if (currentContact) {
      setFormData(currentContact);
    }
  }, [currentContact]);

  if (!currentContact) {
    return (
      <div className="flex justify-center items-center h-screen mt-8">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="w-full max-w-sm">
              <h1 className="text-4xl font-bold mb-10 text-center">
                Contact not found
              </h1>

              <div className="flex justify-center mt-2">
                <Link
                  to="/contacts"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mr-5"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen mt-8">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="w-full max-w-lg bg-gray-50 rounded-lg shadow-lg p-6">
            <FaUser size={64} className="mb-4 mx-auto text-blue-500" />
            <h1 className="text-5xl font-bold mb-10 text-center">
              {formData.firstName} {formData.lastName}
            </h1>
            <div className="mb-6 text-3xl">
              <span className="font-bold mr-2">Status:</span>
              <span
                className={`px-2 py-3 inline-flex text-2xl leading-5 font-semibold rounded-full ${
                  formData.status === "active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {formData.status}
              </span>
            </div>

            <div className="flex justify-center mt-2 text-xl">
              <Link
                to="/contacts"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mr-5"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
