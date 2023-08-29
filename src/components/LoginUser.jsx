import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../resources/logo.png";
import "../stylings/loginCss.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { createUrl } from "../utils/utils";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let jwt;

  const Authenticate = () => {
    // if (userCredential.email.length === "") {
    if (email.length === 0) toast.error("Please enter Email");
    // else if (userCredential.password.length === "") {
    else if (password.length === 0) toast.error("Please enter Password");
    else {
      const body = {
        email,
        password,
      };
      const url = createUrl("/authenticate");
      // console.log(url);
      axios
        // .post("http://localhost:8080/Project/authenticate", body)
        .post(url, body)
        .then((response) => {
          toast.success("Signed in successfully");
          jwt = response.data;
          if (jwt != null) {
            let decoded = jwt_decode(jwt);
            let email = decoded.email;
            let role = decoded.role[0].authority;
            console.log(jwt);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("Authorization", jwt);
            sessionStorage.setItem("isLoggedIn", true);
            // sessionStorage.setItem("name", name);

            if (role === "ROLE_ADMIN") {
              navigate("/admin");
            } else if (role === "ROLE_VENDOR") {
              navigate("/vendor");
            } else if (role === "ROLE_CUSTOMER") {
              navigate("/customer");
            } else {
              toast.error("Invalid user name or password");
            }
          }
        })
        .catch(function (error) {
          let er = error;
          console.log(er);
          toast.error("Email or Password is incorrect!");
        });
    }
  };

  return (
    <div className="row">
      <div className="col"></div>
      <div className="col">
        <div style={{ alignItems: "center", marginTop: 60 }}>
          <div className="container-center">
            <img className="img" src={logo} alt="logo" />
          </div>
          <h2 style={{ textAlign: "center", margin: 10 }}>Login Here</h2>
          <h5 style={{ textAlign: "center" }}>to continue to LagnGhar</h5>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                type="email"
                // name="email"
                className="form-control"
                // value={userCredential.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input
                type="password"
                // name="password"
                className="form-control"
                // value={userCredential.password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <div className="mb-3">
                Don't have an account ?{" "}
                <Link to={"/customer-registration"}>Register as customer</Link>
              </div>
              <div className="mb-3">
                Don't have an account ?{" "}
                <Link to={"/vendor-registration"}>Register as vendor</Link>
              </div>
              <div className="mb-3">
                <button onClick={Authenticate} className="btn btn-success">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col"></div>
    </div>
  );
}
export default LoginUser;
