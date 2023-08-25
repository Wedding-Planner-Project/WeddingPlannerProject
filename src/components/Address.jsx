import { useEffect, useState } from "react";

import axios from "axios";

function Addresses() {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/Project/admin/address")
      .then((response) => {
        const list = response.data;
        setAddress(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //serial
  let i = 1;

  const [addrs, setAddrs] = useState({ pincode: 0, city: "", state: "" });

  //OnChange handler
  const handleChange = (args) => {
    const copyOfAddrs = { ...addrs };
    copyOfAddrs[args.target.name] = args.target.value;
    setAddrs(copyOfAddrs);
  };

  //adding address
  const addAddress = (args) => {
    const data = { ...addrs };
    axios
      .post("http://localhost:8080/Project/admin/address", data)
      .then((response) => {
        // debugger;
        const res = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  return (
    <div className="p-3 mx-3">
      <h1>
        {" "}
        <b>
          <i>Address</i>
        </b>{" "}
      </h1>
      <table class="table">
        <thead class="thead-dark">
          <tr class="table-primary">
            <th scope="col">Serial no.</th>
            <th scope="col">Pincode</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          {address.map((c) => {
            return (
              <tr>
                <th class="table-secondary" scope="row">
                  {i++}
                </th>
                <td class="table-danger">{c.pincode}</td>
                <td class="table-danger">{c.city}</td>
                <td class="table-danger">{c.state}</td>
              </tr>
            );
          })}

          <tr>
            <td class="table-bg-transparent">
              <b>New Address</b>
            </td>
            <td class="table-bg-transparent">
              <input
                type="number"
                value={addrs.pincode}
                name="pincode"
                onChange={handleChange}
              ></input>
            </td>
            <td class="table-bg-transparent">
              <input
                type="text"
                value={addrs.city}
                name="city"
                onChange={handleChange}
              ></input>
            </td>
            <td class="table-bg-transparent">
              <input
                type="text"
                value={addrs.state}
                name="state"
                onChange={handleChange}
              ></input>
            </td>
            <td class="table-bg-transparent">
              <button onClick={addAddress} type="button" class="btn btn-dark">
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Addresses;

{
  /* <table>
            <tbody>
                <tr>
                    <td>Serial no.</td>
                    <td>Pincode</td>
                    <td>City</td>
                    <td>State</td>
                </tr>
                {address.map((c)=>{
                    return(<tr>
                        <td>{i++}</td>
                        <td>{c.pincode}</td>
                        <td>{c.city}</td>
                        <td>{c.state}</td>
                    </tr>)
                })}
                <tr>
                    <td>New Address</td>
                    <td><input type="number"  value={addrs.pincode} name="pincode" onChange={handleChange} ></input></td>
                    <td><input type="text"  value={addrs.city} name="city" onChange={handleChange} ></input></td>
                    <td><input type="text"  value={addrs.state} name="state" onChange={handleChange} ></input></td>
                    <td><button onClick={addAddress}>Add</button></td>
                </tr>
            </tbody>
        </table> */
}
