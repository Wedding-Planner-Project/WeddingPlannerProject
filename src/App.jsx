import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginUser from "./components/LoginUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomerRegistration from "./components/CustomerRegistration";
import VendorRegistration from "./components/VendorRegistration";
import CustomerDashboard from "./components/CustomerDashboard";
import VendorDashboard from "./components/VendorDashboard";
function App() {
  return (
    // loginPage component
    <div>
      <ToastContainer></ToastContainer>
      <Routes>
        {/* Login router  */}
        <Route path="/" element={<LoginUser />} />
        <Route path="/login" element={<LoginUser />} />

        {/* customer registration */}
        <Route
          path="/customer-registration"
          element={<CustomerRegistration />}
        />
        {/* Coustomer Dashboard */}
        <Route path="/customer" element={<CustomerDashboard />} />
        {/* vendor registration */}
        <Route path="/vendor-registration" element={<VendorRegistration />} />
        {/* vendor Dashboard */}
        <Route path="/vendor" element={<VendorDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
