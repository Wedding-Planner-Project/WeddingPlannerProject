import Home from "./home";
import { Route } from "react-router-dom";

function ProtectedVendor(props) {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const role = sessionStorage.getItem("role");

  if (isLoggedIn && role == "ROLE_VENDOR") {
    //check for sessionStorage values
    //    if(true)
    return <Route path={props.path} element={props.component} />;
  } else {
    return <Home></Home>;
  }
}

export default ProtectedVendor;
