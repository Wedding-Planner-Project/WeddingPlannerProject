import { useEffect, useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { createUrl } from "../utils/utils";
function CustomerProfile() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    mob_no: 0,
    dob: "",
    gender: "",
    address: {
      pincode: 0,
      city: "",
      state: "",
    },
    role: "ROLE_CUSTOMER",
  });

  //OnChange handler
  const handleChange = (args) => {
    const copyOfCustomer = { ...customer };
    copyOfCustomer[args.target.name] = args.target.value;
    setCustomer(copyOfCustomer);
  };

  useEffect(() => {
    // const url =
    //   createUrl("/customer/p/profile/") + sessionStorage.getItem("email");
    const url =
      "http://localhost:8080/Project/customer/p/profile/" +
      sessionStorage.getItem("email");
    axios.get(url).then((response) => {
      const v = response.data;
      setCustomer(v);
    });
  }, []);

  //array of list of states
  const [statesList, setStatesList] = useState([]);
  //array of list of cities
  const [cityList, setCityList] = useState([]);
  // array of list of pincodes
  const [pincodes, setPincodes] = useState([]);

  useEffect(() => {
    getState();
  }, []);
  const getState = () => {
    // const url = createUrl("/aux/state");
    axios
      .get("http://localhost:8080/Project/aux/state")
      // .get(url)
      .then(function (response) {
        const states = response.data;
        setStatesList(states);
      });
  };

  const getCity = (args) => {
    const statesSelected = args.target.value;
    // const url = createUrl("/aux/city/") + statesSelected;
    axios
      .get("http://localhost:8080/Project/aux/city/" + statesSelected)
      // .get(url)
      .then(function (response) {
        const cities = response.data;
        setCityList(cities);
      });
  };

  const getPincode = (args) => {
    const citySelected = args.target.value;
    // const url = createUrl("/aux/pincode/") + citySelected;
    const pinUrl = "http://localhost:8080/Project/aux/pincode/" + citySelected;
    axios.get(pinUrl).then(function (response) {
      const pincode = response.data;
      setPincodes(pincode);
    });
  };

  const deleteProfile = () => {
    // const url =
    //   createUrl("/customer/p/profile/") + sessionStorage.getItem("email");
    const url =
      "http://localhost:8080/Project/customer/p/profile/" +
      sessionStorage.getItem("email");
    axios.delete(url).then((response) => {
      const result = response.data;
      if (result) {
        navigate("/login");
      }
    });
  };

  const updateProfile = () => {
    const data = { ...customer };
    const url =
      createUrl("/customer/p/profile/") + sessionStorage.getItem("email");
    // const url =
    //   "http://localhost:8080/Project/customer/p/profile/" +
    //   sessionStorage.getItem("email");
    axios.put(url, data).then((response) => {
      const result = response.data;
      debugger;
      if (result) {
        window.location.reload();
        toast.success("update successfully");
      }
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-5 mb-3 mx-4">
      <h1>
        <b>
          <center>Customer Profile</center>
        </b>
      </h1>
      <div style={{ width: 600 }}>
        <button className="btn btn-danger mx-4 my-3" onClick={deleteProfile}>
          Delete Profile
        </button>
        <button onClick={goBack} className="btn btn-warning my-2">
          Back
        </button>

        <div className="col"></div>
        <div className="col" style={{ columnWidth: 500 }}>
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
        </div>
        <button
          type="button"
          class="btn btn-warning my-3"
          onClick={updateProfile}
        >
          Update
        </button>
      </div>
    </div>
  );
}
export default CustomerProfile;
