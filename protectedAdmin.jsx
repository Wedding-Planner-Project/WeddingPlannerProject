//import Home from "./home";
import { Route } from "react-router-dom";
import Login from "./Login";

function ProtectedAdmin(props) {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const role = sessionStorage.getItem("role");
  debugger;
  if (isLoggedIn && role == "ROLE_ADMIN") {
    //check for sessionStorage values
    // if(true)
    debugger;
    return <Route path={props.path} element={props.component} />;
  } else {
    debugger;
    return <Login></Login>;
  }
}

export default ProtectedAdmin;
