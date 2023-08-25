import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VendorProfile() {
  const navigate = useNavigate();
  const [vendor, setVendor] = useState({
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
    role: "ROLE_VENDOR",
    cmp_name: "",
  });

  //OnChange handler
  const handleChange = (args) => {
    const copyOfvendor = { ...vendor };
    copyOfvendor[args.target.name] = args.target.value;
    setVendor(copyOfvendor);
  };

  //on load bring vendor profile details
  useEffect(() => {
    const url =
      "http://localhost:8080/Project/vendor/profile/" +
      sessionStorage.getItem("email");
    axios
      .get(url)
      .then((response) => {
        const v = response.data;
        setVendor(v);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //array of list of states
  const [statesList, setStatesList] = useState([]);
  //array of list of cities
  const [cityList, setCityList] = useState([]);
  // array of list of pincodes
  const [pincodes, setPincodes] = useState([]);

  //on mount getting list of states
  useEffect(() => {
    //call to get list of states
    debugger;
    getState();
  }, []);

  const getState = () => {
    axios
      .get("http://localhost:8080/Project/aux/state")
      .then(function (response) {
        const states = response.data;
        setStatesList(states);
        // debugger;
      });
  };
  //On state select getting citylist
  const getCity = (args) => {
    const statesSelected = args.target.value;
    const cityUrl = "http://localhost:8080/Project/aux/city/" + statesSelected;
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
    const pinUrl = "http://localhost:8080/Project/aux/pincode/" + citySelected;
    // debugger;
    axios.get(pinUrl).then(function (response) {
      const pincode = response.data;
      setPincodes(pincode);
      // debugger;
    });
  };

  //function to delete profile
  const deleteProfile = () => {
    const url =
      "http://localhost:8080/Project/vendor/profile/" +
      sessionStorage.getItem("email");
    axios.delete(url).then((response) => {
      const result = response.data;
      if (result) {
        navigate("/login");
      }
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  //update profile function
  const updateProfile = (args) => {
    const data = { ...vendor };

    const url =
      "http://localhost:8080/Project/vendor/profile/" +
      sessionStorage.getItem("email");

    axios
      .put(url, data)
      .then((response) => {
        const result = response.data;
        if (result) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-5 mb-3 mx-4">
      <h1>
        <b>
          <i>Vendor Profile </i>
        </b>
      </h1>
      <button class="btn btn-danger mx-4 my-3" onClick={deleteProfile}>
        Delete Profile
      </button>
      <button class="btn btn-dark mx-4" onClick={goBack}>
        Back
      </button>
      {/* <form> */}
      <div style={{ width: 600 }}>
        <div class="form-row">
          {/* <div class="form-group col-md-6">
  <label for="inputEmail4">Email</label>
  <input type="hidden" class="form-control" id="inputEmail4" placeholder="Email" required value={vendor.email} onChange={handleChange}/>
</div> */}
          {/* <div class="form-group col-md-6">
  <label for="inputPassword4">Password</label>
  <input type="password" class="form-control" name ="password" id="inputPassword4" placeholder="Password" required value={vendor.password} onChange={handleChange}/>
</div> */}
        </div>

        <div class="form-group">
          <label for="inputAddress">First Name</label>
          <input
            type="text"
            class="form-control bg-transparent"
            name="first_name"
            placeholder="First Name"
            id="inputAddress"
            required
            value={vendor.first_name}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Last Name</label>
          <input
            type="text"
            class="form-control bg-transparent"
            name="last_name"
            placeholder="Last Name"
            id="inputAddress2"
            required
            value={vendor.last_name}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Company Name</label>
          <input
            type="text"
            class="form-control bg-transparent"
            name="cmp_name"
            placeholder="Company Name"
            id="inputAddress2"
            required
            value={vendor.cmp_name}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Mobile No.</label>
          <input
            type="text"
            class="form-control bg-transparent"
            name="mob_no"
            placeholder="Mobile No"
            id="inputAddress2"
            pattern="^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$"
            required
            value={vendor.mob_no}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Date Of Birth</label>
          <input
            type="date"
            class="form-control bg-transparent"
            name="dob"
            id="inputAddress2"
            required
            value={vendor.dob}
            onChange={handleChange}
          />
        </div>
        <div class="form-row">
          <div class="form-group ">
            <label for="inputState">Gender</label>
            <select
              name="gender"
              required
              value={vendor.gender}
              class="form-control bg-transparent"
              onChange={handleChange}
            >
              <option value="">--Select Gender--</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <div class="form-group ">
            <label for="inputCity">State</label>
            <select
              name="state"
              class="form-control bg-transparent"
              required
              onChange={getCity}
            >
              <option value="">--Select State--</option>
              {statesList.map((state) => {
                return <option value={state}>{state}</option>;
              })}
            </select>
          </div>
          <div class="form-group ">
            <label for="inputCity">City</label>
            <select
              name="city"
              class="form-control bg-transparent"
              required
              onChange={getPincode}
            >
              <option value="">--Select City--</option>
              {cityList.map((city) => {
                return <option value={city}>{city}</option>;
              })}
            </select>
          </div>
          <div class="form-group my-3">
            <label for="inputZip">Pin Code</label>
            <select
              name="pincode"
              required
              value={vendor.pincode}
              class="form-control bg-transparent"
              onChange={handleChange}
            >
              <option value="">--Select Pincode--</option>
              {pincodes.map((pin) => {
                return <option value={pin}>{pin}</option>;
              })}
            </select>
          </div>
        </div>
        <button type="button" class="btn btn-primary" onClick={updateProfile}>
          Update
        </button>
      </div>
      {/* </form> */}
    </div>
  );
}

export default VendorProfile;
