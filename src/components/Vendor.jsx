import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Vendors() {
  //index param
  let i = 1;
  const [vendorList, setVendorList] = useState([
    {
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
      pincode: 0,
      role: "",
      cmp_name: "",
    },
  ]);

  //history
  const navigate = useNavigate();

  //Making api call on load
  useEffect(() => {
    axios
      .get("http://localhost:8080/Project/admin/vendors")
      .then((response) => {
        const list = response.data;
        setVendorList(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteVendor = (args) => {
    const url =
      "http://localhost:8080/Project/admin/deleteVendor/" + args.target.value;
    axios
      .delete(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-3">
      <div style={{ textAlign: "center" }}>
        <h1>
          <b>List of Vendors</b>
        </h1>
      </div>

      <button class="btn col-1 btn-dark mx-4" onClick={goBack}>
        Back
      </button>
      <table class="table">
        <thead class="thead-dark">
          <tr class="table-primary">
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Gender</th>
            <th scope="col">Mobile</th>
            <th scope="col">Company Name</th>
            <th scope="col">PinCode</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        {vendorList.map((vendor) => {
          return (
            <tbody>
              <tr>
                <th class="table-bg-transparent" scope="row">
                  {i++}
                </th>
                <td class="table-bg-transparent">
                  <b>{vendor.first_name}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{vendor.last_name}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{vendor.email}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{vendor.dob}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{vendor.gender}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{vendor.mob_no}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{vendor.cmp_name}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{vendor.pincode}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{vendor.address.city}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{vendor.address.state}</b>
                </td>
                <button
                  name="button"
                  onClick={deleteVendor}
                  value={vendor.email}
                >
                  delete
                </button>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
export default Vendors;
