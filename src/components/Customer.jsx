import { useEffect, useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
import axios from "axios";
function Customers() {
  const navigate = useNavigate();

  const [custList, setCustList] = useState([
    {
      email: "",
      first_name: "",
      last_name: "",
      mob_no: "",
      dob: "",
      gender: "",
      address: {
        pincode: 0,
        city: "",
        state: "",
      },
      pincode: 0,
      role: "ROLE_CUSTOMER",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/Project/admin/customers")
      .then((response) => {
        const list = response.data;
        setCustList(list);
      });
  }, []);

  const deleteCust = (args) => {
    const email = args.target.value;
    const url = "http://localhost:8080/Project/admin/deleteCustomer/" + email;
    axios.delete(url).then((response) => {
      console.log(response.data);
    });
    window.location.reload();
  };

  const goBack = () => {
    navigate(-1);
  };

  let i = 1;

  return (
    <div className="p-5">
      <h1>
        <b>List of Customers</b>
      </h1>
      <button className="btn col-2 btn-dark mx-4" onClick={goBack}>
        Back
      </button>
      <table className="table">
        <thead className="thead-dark">
          <tr className="table-primary">
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Gender</th>
            {/* <th scope="col">Company Name</th> */}
            <th scope="col">PinCode</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        {custList.map((customer) => {
          return (
            <tbody>
              <tr id={customer.email}>
                <th className="table-bg-transparent" scope="row">
                  {i++}
                </th>
                <td className="table-bg-transparent">
                  <b>{customer.first_name}</b>
                </td>
                <td className="table-bg-transparent">
                  <b>{customer.last_name}</b>
                </td>
                <td className="table-bg-transparent">
                  <b>{customer.email}</b>
                </td>
                <td className="table-bg-transparent">
                  <b>{customer.mob_no}</b>
                </td>
                <td className="table-bg-transparent">
                  <b>{customer.dob}</b>
                </td>
                <td className="table-bg-transparent">
                  <b>{customer.gender}</b>
                </td>

                {/* <td class="table-danger">{vendor.cmp_name}</td> */}
                {/* <td class="table-danger">{customer.address.pincode}</td> */}
                <td className="table-bg-transparent">
                  <b>{customer.address.pincode}</b>
                </td>
                {/* <td class="table-danger">{customer.address.city}</td> */}
                <td className="table-bg-transparent">
                  <b>{customer.address.city}</b>
                </td>
                <td className="table-bg-transparent">
                  <b>{customer.address.state}</b>
                </td>
                {/* <button name="button" onClick={deleteCust} value={customer.email}>delete</button> */}
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Customers;
