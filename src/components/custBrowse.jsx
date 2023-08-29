import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomerProduct from "./custProducts";
// import { createUrl } from "../utils/utils";

function CustomerBrowse() {
  let i = 1;
  const [browse, setBrowse] = useState([
    {
      id: 0,
      servName: "",
      serv_desc: "",
      serv_price: 0,
      creatn_date: "",
      first_name: "",
      cmp_name: "",
      pincode: 0,
      city: "",
      state: "",
      mob_no: 0,
      email: "",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    // const url = createUrl("/customer/services");
    const url = "http://localhost:8080/Project/customer/services";
    axios.get(url).then((response) => {
      const list = response.data;
      setBrowse(list);
    });
  }, []);

  const viewService = (args) => {
    debugger;
    // const url =
    //   createUrl("/customer/behaviour/") +
    //   sessionStorage.getItem("email") +
    //   "/" +
    //   args.target.value;
    debugger;
    const behaveUrl =
      "http://localhost:8080/Project/customer/behaviour/" +
      sessionStorage.getItem("email") +
      "/" +
      args.target.value;
    axios
      .post(behaveUrl)
      .then((response) => {
        const res = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    var sid = args.target.value;
    
    navigate(`/customer/browse/product?sid=${sid}`);
   
  };

  var goBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-5 mb-1 mx-4">
      <h1>
        <b>Customer Services</b>
      </h1>

      <table className="table">
        <thead className="thead-dark">
          <tr className="table-primary">
            <th scope="col">Sr No.</th>
            <th scope="col">Service Name</th>
            <th scope="col">Description</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Price Per Unit</th>
          </tr>
        </thead>
        {browse.map((o) => {
          return (
            <tbody>
              <tr id={o.servName}>
                <th className="table-bg-transparent" scope="row">
                  {i++}
                </th>
                <td className="table-bg-transparent">
                  <b>{o.servName}</b>
                </td>
                <td className="table-bg-transparent">
                  <b>{o.serv_desc}</b>
                </td>
                <td className="table-bg-transparent">
                  <b>{o.city}</b>
                </td>
                <td className="table-bg-transparent">
                  <b>{o.state}</b>
                </td>
                <td className="table-bg-transparent">
                  <b>{o.serv_price}</b>
                </td>
                <td>
                  <button
                    onClick={viewService}
                    className="btn btn-info"
                    value={o.id}
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
        <tbody>
          <tr>
            <td>
              <button onClick={goBack} className="btn btn-warning my-2">
                Back
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default CustomerBrowse;
