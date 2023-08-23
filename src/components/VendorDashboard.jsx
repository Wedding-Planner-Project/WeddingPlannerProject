import { Link } from "react-router-dom";
import "../stylings/vendorDashboardcss.css";
function VendorDashboard() {
  return (
    <div className="p-5 mb-3 mx-4">
      <div className="div">
        <h1>
          <b>
            <i>Vendor Dashboard</i>
          </b>
        </h1>
      </div>
      <hr />
      <div className="div">
        <Link to={"/vendor/services"}>
          {" "}
          <button className="btn btn-primary mx-4">Services</button>
        </Link>
        <Link to={"/vendor/orders"}>
          {" "}
          <button className="btn btn-primary mx-4">Orders</button>
        </Link>{" "}
        <Link to={"/vendor/profiles"}>
          {" "}
          <button className="btn btn-primary mx-4">Update Profile</button>
        </Link>{" "}
        <Link to={"/vendor/mail"}>
          {" "}
          <button className="btn btn-primary mx-4">Mail</button>
        </Link>
      </div>
    </div>
  );
}
export default VendorDashboard;
