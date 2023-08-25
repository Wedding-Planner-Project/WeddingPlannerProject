import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createUrl } from "../utils/utils";
import "../stylings/VendorServicesStyle.css";

function VendorServices() {
  //index
  let i = 1;
  const navigate = useNavigate();

  const [services, setServices] = useState([
    {
      servName: "",
      serv_desc: "",
      serv_price: 0,
      creatn_date: "",
      mod_date: "",
    },
  ]);

  const [addServ, setAddServ] = useState({
    servName: "",
    serv_desc: "",
    serv_price: 0,
  });

  const [category, setCategory] = useState([]);

  //on page load bring in all services
  useEffect(() => {
    // const url = createUrl("vendor/services/") + sessionStorage.getItem("email");
    const url =
      "http://localhost:8080/Project/vendor/services/" +
      sessionStorage.getItem("email");
    axios
      .get(url)
      .then((response) => {
        const list = response.data;
        setServices(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //on page load bring in all category
  useEffect(() => {
    const url = createUrl("/admin/category");
    axios
      .get(url)
      .then((response) => {
        const list = response.data;
        setCategory(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //delete Service
  const deleteService = (args) => {};

  const goBack = () => {
    navigate(-1);
  };

  //add Service
  const addService = () => {
    const data = { ...addServ };
    // const url =
    //   createUrl("/vendor/addservice") + sessionStorage.getItem("email");
    const url =
      "http://localhost:8080/Project/vendor/addservice/" +
      sessionStorage.getItem("email");
    axios
      .post(url, data)
      .then((response) => {
        const res = response.data;
        if (res == true) {
          window.location.reload();
        } else {
          alert(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //OnChange handler
  const handleChange = (args) => {
    const copyOfService = { ...addServ };
    copyOfService[args.target.name] = args.target.value;
    setAddServ(copyOfService);
  };

  return (
    //     <div className="container">
    //       <div className="header">
    //         <h1>
    //           <b>Your Services</b>
    //         </h1>
    //         <button className="btn btn-dark" onClick={goBack}>
    //           Back
    //         </button>
    //       </div>

    //       {/* Table for existing services */}
    //       <table className="table">
    //         <thead className="thead-dark">{/* ... */}</thead>
    //         {services.map((o) => (
    //           <tbody key={o.id}>{/* ... */}</tbody>
    //         ))}
    //       </table>

    //       <hr />

    //       {/* Table for adding a new service */}
    //       <table className="table">
    //         <thead className="thead-dark">
    //           <tr class="table-primary">
    //             <th scope="col">Id</th>
    //             <th scope="col">Service Name</th>
    //             <th scope="col">Description</th>
    //             <th scope="col">Price per Unit</th>
    //             <th scope="col">Date Created</th>
    //             <th scope="col">Date Modified</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <td>
    //               <div className="form-group">{/* ... */}</div>
    //             </td>
    //             <td className="table-bg-transparent">
    //               <input
    //                 type="text"
    //                 name="serv_desc"
    //                 value={addServ.serv_desc}
    //                 onChange={handleChange}
    //               ></input>
    //             </td>
    //             <td className="table-bg-transparent">
    //               <input
    //                 type="number"
    //                 name="serv_price"
    //                 value={addServ.serv_price}
    //                 onChange={handleChange}
    //               ></input>
    //             </td>
    //             <td>
    //               <button
    //                 onClick={addService}
    //                 className="btn btn-dark add-service-btn"
    //               >
    //                 Add Service
    //               </button>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   );
    // }
    <div className="p-5 mb-1 mx-4">
      <div style={{ textAlign: "center" }}></div>
      <h1>
        <b>Your Services</b>
      </h1>
      <button class="btn btn-dark mx-4" onClick={goBack}>
        Back
      </button>

      <table class="table">
        <thead class="thead-dark">
          <tr class="table-primary">
            <th scope="col">Id</th>
            <th scope="col">Service Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price per Unit</th>
            <th scope="col">Date Created</th>
            <th scope="col">Date Modified</th>
          </tr>
        </thead>
        {services.map((o) => {
          return (
            <tbody>
              <tr id={o.servName}>
                <th class="table-bg-transparent" scope="row">
                  {i++}
                </th>

                <td class="table-bg-transparent">
                  <b>{o.servName}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{o.serv_desc}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{o.serv_price}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{o.creatn_date}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{o.mod_date}</b>
                </td>
                {/* <td><button value={o.servName} onClick={deleteService}>delete</button></td> */}
              </tr>
            </tbody>
          );
        })}
      </table>
      <hr></hr>
      <table class="table">
        <thead class="thead-dark">
          <tr class="table-primary">
            <th scope="col">Service Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price per Unit</th>
          </tr>
        </thead>
        <tr>
          <td>
            <div class="form-group ">
              <select
                name="servName"
                class="form-control bg-transparent"
                required
                value={addServ.servName}
                onChange={handleChange}
              >
                <option value="">--Select Category--</option>
                {category.map((a) => {
                  return <option value={a.servName}>{a.servName}</option>;
                })}
              </select>
            </div>
          </td>
          <td class="table-bg-transparent">
            <input
              type="text"
              name="serv_desc"
              value={addServ.serv_desc}
              onChange={handleChange}
            ></input>
          </td>
          <td class="table-bg-transparent">
            <input
              type="number"
              name="serv_price"
              value={addServ.serv_price}
              onChange={handleChange}
            ></input>
          </td>
          <td>
            <button onClick={addService} class="btn btn-dark">
              Add Service
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default VendorServices;
