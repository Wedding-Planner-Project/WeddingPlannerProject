import { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "react-router-dom";
//import { Calendar } from "react-calendar";
//import states from "./resources/states.json"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import regPagePhoto from "../resources/regPagePhoto.jpg";

function CustomerRegistration() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    mob_no: "",
    dob: "",
    gender: "",
    pincode: 0,
  });

  //On Fail message
  const [message, setMessage] = useState({ message: "" });

  //array of list of states
  const [statesList, setStatesList] = useState([]);
  //array of list of cities
  const [cityList, setCityList] = useState([]);
  // array of list of pincodes
  const [pincodes, setPincodes] = useState([]);

  const [countries, setCountries] = useState([]);

  //on mount getting list of states
  useEffect(() => {
    //call to get list of states
    debugger;
    getState();
  }, []);

  const getState = () => {
    axios
      .get("http://localhost:7570/Project/aux/state")
      .then(function (response) {
        const states = response.data;
        setStatesList(states);
        // debugger;
      });
  };
  //On state select getting citylist
  const getCity = (args) => {
    const statesSelected = args.target.value;
    const cityUrl = "http://localhost:7570/Project/aux/city/" + statesSelected;
    // debugger;
    axios.get(cityUrl).then(function (response) {
      const cities = response.data;
      setCityList(cities);
      // debugger;
    });
  };

  //On change city list
  const getPincode = (args) => {
    const citySelected = args.target.value;
    const pinUrl = "http://localhost:7570/Project/aux/pincode/" + citySelected;
    debugger;
    axios.get(pinUrl).then(function (response) {
      const pincode = response.data;
      setPincodes(pincode);
      debugger;
    });
  };

  //OnChange handler
  const handleChange = (args) => {
    const copyOfCustomer = { ...customer };
    copyOfCustomer[args.target.name] = args.target.value;
    setCustomer(copyOfCustomer);
  };

  //On submit Register Function
  const Register = () => {
    // debugger;
    const cData = { ...customer };
    axios
      .post("http://localhost:7570/Project/register/customer", cData)
      .then((response) => {
        const onRegister = response.data;
        if (onRegister == true) {
          toast.success("you are registered successfully");
          navigate("/login");
        } else {
          toast.warning(onRegister["error"]);
        }
      });
  };

  return (
    // // <div style={{display:"flex",width:"100%",height:900}}>
    // // <div classNameName="p-5 mb-3 mx-4" style={{marginLeft:0, width: 700 ,height:900,backgroundColor:"white"}}>
    // // <h1><b><i>Customer Registration Page</i></b></h1>
    // {/* <form onSubmit={Register}> */}
    // {/* <div style={{marginLeft:0, width: 600 ,height:900,backgroundColor:"white"}}> */}
    // <div style={{display:"flex"}}>
    //   <div className="col-md-3">
    //     <div className="card">
    //       <img
    //       src={"./d.jpg"}
    //       style={{height:"100%"}}
    //       alt=""
    //       />
    //     </div>

    // </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        <h1 style={{ textAlign: "center", margin: 10 }}>Register customer</h1>
        <div className="row">
          <div className="col">
            <img src={regPagePhoto} alt="Image" style={{ marginTop: 100 }} />
          </div>
          <div className="col"></div>
          <div className="col" style={{ columnWidth: 500 }}>
            <div className="form">
              <div className="mb3">
                <label htmlFor="">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  className="form-control bg-transparent"
                  name="email"
                  id="inputEmail4"
                  placeholder="Email"
                  required
                  style={{ width: 330 }}
                  value={customer.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb3">
                <label htmlFor="">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control bg-transparent"
                  name="password"
                  id="inputPassword4"
                  placeholder="Password"
                  required
                  value={customer.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb3">
              <label htmlFor="">
                <b>First Name</b>
              </label>
              <input
                type="text"
                className="form-control bg-transparent"
                name="first_name"
                id="inputAddress"
                placeholder="First Name"
                required
                value={customer.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb3">
              <label htmlFor="">
                <b>Last Name</b>
              </label>
              <input
                type="text"
                className="form-control bg-transparent"
                name="last_name"
                id="inputAddress2"
                placeholder="Last Name"
                required
                value={customer.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb3">
              <label htmlFor="">
                <b>Mobile No.</b>
              </label>
              <input
                type="text"
                className="form-control bg-transparent"
                name="mob_no"
                id="inputAddress2"
                placeholder="Mobile No."
                pattern="^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$"
                required
                value={customer.mob_no}
                onChange={handleChange}
              />
            </div>
            <div className="mb3">
              <label htmlFor="">
                <b>Date Of Birth</b>
              </label>
              <input
                type="date"
                className="form-control bg-transparent"
                name="dob"
                id="inputAddress2"
                required
                value={customer.dob}
                onChange={handleChange}
              />
            </div>

            <div className="mb3">
              <label htmlFor="">
                <b>Gender</b>
              </label>
              <select
                name="gender"
                required
                value={customer.gender}
                className="form-control bg-transparent"
                onChange={handleChange}
              >
                <option value="">--Select Gender--</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
            <div className="mb3">
              <label htmlFor="">
                <b>State</b>
              </label>
              <select
                name="state"
                className="form-control bg-transparent"
                required
                onChange={getCity}
              >
                <option value="">--Select State--</option>
                {statesList.map((state) => {
                  return <option value={state}>{state}</option>;
                })}
              </select>
            </div>
            <div className="form-group ">
              <label htmlFor="">
                <b>City</b>
              </label>
              <select
                name="city"
                required
                value={customer.city}
                className="form-control bg-transparent"
                onChange={getPincode}
              >
                <option value="">--Select City--</option>
                {cityList.map((city) => {
                  return <option value={city}>{city}</option>;
                })}
              </select>
            </div>
            <div className="mb3">
              <label htmlFor="">
                <b>Pin Code</b>
              </label>
              <select
                name="pincode"
                required
                value={customer.pincode}
                className="form-control bg-transparent"
                onChange={handleChange}
              >
                <option value="">--Select Pincode--</option>
                {pincodes.map((pin) => {
                  return <option value={pin}>{pin}</option>;
                })}
              </select>
            </div>
            <div className="mb-3">
              <div className="mb3">
                {" "}
                Already have an account? <Link to="/login"> Login here</Link>
              </div>

              <button
                onClick={Register}
                style={{ margin: "10px" }}
                className="btn btn-success"
              >
                Register
              </button>
            </div>

            {/* <div classNameName="rightdiv" style={{backgroundColor:"black",marginLeft:400, height:1000,width:700}}>
<h1>Customer</h1>
</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerRegistration;
