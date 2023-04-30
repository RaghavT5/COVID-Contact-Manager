import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import SideBar from "./components/SideBar";
import { Contacts } from "./pages/Contacts";
import { AddContactForm } from "./pages/AddContactForm";
import { EditContactForm } from "./pages/EditContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import ContactDetails from "./pages/ContactDetails";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <SideBar />
        <ToastContainer
          hideProgressBar={true}
          theme="colored"
          className="my-24"
          autoClose={1000}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contact/add-contact" element={<AddContactForm />} />
          <Route
            path="/contact/edit-contact/:id"
            element={<EditContactForm />}
          />
          <Route path="/contacts/:id" element={<ContactDetails />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
