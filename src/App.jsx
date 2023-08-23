import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginUser from "./components/LoginUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomerRegistration from "./components/CustomerRegistration";

function App() {
  return (
    // loginPage component
    <div>
      <ToastContainer></ToastContainer>
      <Routes>
        {/* Login router  */}
        <Route path="/" element={<LoginUser />} />

        {/* customer registration */}
        <Route
          path="/customer-registration"
          element={<CustomerRegistration />}
        />
      </Routes>
    </div>
  );
}

export default App;
