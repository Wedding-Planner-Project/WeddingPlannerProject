// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginUser from "./components/LoginUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomerRegistration from "./components/CustomerRegistration";
import VendorRegistration from "./components/VendorRegistration";
import CustomerDashboard from "./components/CustomerDashboard";
import VendorDashboard from "./components/VendorDashboard";
import Menubars from "./services/menubars";
import Footer from "./services/Footer";
import ViewPage from "./components/ViewPage";
import VendorMail from "./components/VendorMail";
import CustomerMail from "./components/customerMail";
// import ReviewsCards from "./components/CardComponent";
import CardComponent from "./components/CardComponent";
import VendorOrders from "./components/VendorOrders";
import VendorServices from "./components/VendorServices";
import CustomerBrowse from "./components/custBrowse";
import CustomerProduct from "./components/custProducts";
import CustomerProfile from "./components/customerProfile";
import CustomerOrders from "./components/customerOrders";
import AdminDashboard from "./components/AdminDashboard";
import Customers from "./components/Customer";
import Vendors from "./components/Vendor";
import Orders from "./components/Orders";
import Categories from "./components/Categories";
import Addresses from "./components/Address";
import VendorProfile from "./components/VendorProfile";
import AboutUs from "./components/AboutUs";
// import ProtectedAdmin from "./components/protectedAdmin";

function App() {
  return (
    <>
      <Menubars></Menubars>
      {/* loginPage component */}
      <div>
        <ToastContainer></ToastContainer>
        <Routes>
          {/* <Switch> */}
          <Route path="/" element={<ViewPage />} />
          <Route path="/home" element={<ViewPage />} />
          {/* Login router  */}
          <Route path="/login" element={<LoginUser />} />
          {/* admin Dashboard */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="admin/vendors" element={<Vendors />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/addresses" element={<Addresses />} />
          {/* customer registration */}
          <Route
            path="/customer-registration"
            element={<CustomerRegistration />}
          />
          {/* Coustomer Dashboard */}
          <Route exact path="/customer" element={<CustomerDashboard />} />
          <Route exact path="/customer/browse" element={<CustomerBrowse />} />
          <Route
            path="/customer/browse/product"
            element={<CustomerProduct />}
          />
          <Route path="/customer/mail" element={<CustomerMail />} />
          <Route path="/customer/profile" element={<CustomerProfile />} />
          <Route path="/customer/order" element={<CustomerOrders />} />
          {/* vendor registration */}
          <Route path="/vendor-registration" element={<VendorRegistration />} />
          {/* vendor Dashboard */}
          <Route path="/vendor" element={<VendorDashboard />} />
          {/* vendor mail */}
          <Route path="/vendor/mail" element={<VendorMail />} />
          {/* customer mail route */}
          <Route path="/reviews" element={<CardComponent />} />
          <Route path="/vendor/orders" element={<VendorOrders />} />
          <Route path="/vendor/services" element={<VendorServices />} />
          <Route path="/vendor/profile" element={<VendorProfile />} />

          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        {/* </Switch> */}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
