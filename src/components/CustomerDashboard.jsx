import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUrl } from "../utils/utils";
import { Button, Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEdit,
  faBoxOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../stylings/CustomerDashboardStyle.css";
function CustomerDashboard() {
  let i = 1;
  const navigate = useNavigate();

  const viewService = (args) => {
    const url =
      createUrl("/customer/behaviour/") +
      sessionStorage.getItem("email") +
      "/" +
      args.target.value;
    // const behaveUrl =
    // "http://localhost:7570/Project/customer/behaviour/" +
    //   sessionStorage.getItem("email") +
    //   "/" +
    //   args.target.value;
    axios
      .post(url)
      .then((response) => {
        const res = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    const sid = args.target.value;
    navigate({ pathname: "/customer/browse/product", state: { sid } });
  };

  useEffect(() => {
    const url =
      createUrl("/customer/p/recommend") + sessionStorage.getItem("email");
    axios
      .get(url)
      .then((response) => {
        const list = response.data;
        setRecom(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [recom, setRecom] = useState([
    {
      id: 0,
      serName: "",
      ser_desc: "",
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

  return (
    <Container className="py-5">
      <h1 className="mb-4">Customer Dashboard</h1>
      <div className="dashboard-buttons row">
        <div className="col-md-3">
          <Card className="dashboard-card">
            <Card.Body>
              <FontAwesomeIcon icon={faSearch} className="dashboard-icon" />
              <Card.Title>Browse Services</Card.Title>
              <Button
                variant="primary" // Set the button color to blue
                size="sm"
                className="card-button-style"
                onClick={() => navigate("/customer/browse")}
                style={{ backgroundColor: "#007bff", borderColor: "#007bff" }} // Set blue color
              >
                Browse
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="dashboard-card">
            <Card.Body>
              <FontAwesomeIcon icon={faEdit} className="dashboard-icon" />
              <Card.Title>Update Profile</Card.Title>
              <Button
                variant="primary" // Set the button color to blue
                size="sm"
                className="card-button-style"
                onClick={() => navigate("/customer/profile")}
                style={{ backgroundColor: "#007bff", borderColor: "#007bff" }} // Set blue color
              >
                Update
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="dashboard-card">
            <Card.Body>
              <FontAwesomeIcon icon={faBoxOpen} className="dashboard-icon" />
              <Card.Title>Orders</Card.Title>
              <Button
                variant="primary" // Set the button color to blue
                size="sm"
                className="card-button-style"
                onClick={() => navigate("/customer/order")}
                style={{ backgroundColor: "#007bff", borderColor: "#007bff" }} // Set blue color
              >
                View Orders
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="dashboard-card">
            <Card.Body>
              <FontAwesomeIcon icon={faEnvelope} className="dashboard-icon" />
              <Card.Title>Mail</Card.Title>
              <Button
                variant="primary" // Set the button color to blue
                size="sm"
                className="card-button-style"
                onClick={() => navigate("/customer/mail")}
                style={{ backgroundColor: "#007bff", borderColor: "#007bff" }} // Set blue color
              >
                View Mail
              </Button>
            </Card.Body>
          </Card>
        </div>
        {/* Similar cards for Mail */}
        {/* ... */}
      </div>
      <hr />

      <div className="recommendation-table">
        <center>
          <h2 className="mb-3">
            <b>Recommendations for you</b>
          </h2>
        </center>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr className="table-primary">
              <th scope="col">Sr No.</th>
              <th scope="col">Service Name</th>
              <th scope="col">Description</th>
              <th scope="col">Location</th>
              <th scope="col">Price Per Unit</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {recom.map((o, index) => (
              <tr key={o.id}>
                <td>{index + 1}</td>
                <td>
                  <b>{o.servName}</b>
                </td>
                <td>{o.serv_desc}</td>
                <td>
                  {o.city}, {o.state}
                </td>
                <td>{o.serv_price}</td>
                <td>
                  <button
                    onClick={() => viewService({ target: { value: o.id } })}
                    className="btn btn-outline-primary btn-sm"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
//     <div className="p-5 mb-1 mx-4" style={{ textAlign: "center" }}>
//       <h1>
//         <b>
//           <i>Customer Dashboard</i>
//         </b>
//       </h1>
//       <a href="/customer/browse">
//         <button class="btn btn-primary mx-4">Browse Service</button>
//       </a>
//       <a href="/customer/profile">
//         <button class="btn btn-primary mx-4">Update Profile</button>
//       </a>
//       <a href="/customer/order">
//         <button class="btn btn-primary mx-4">Orders</button>
//       </a>
//       <a href="/customer/mail">
//         <button class="btn btn-primary mx-4">Mail</button>
//       </a>
//       <hr />
//       <h2>Recommendations for you</h2>

//       <table className="table">
//         <thead className="thead-dark">
//           <tr className="table-primary">
//             <th scope="col">Sr No.</th>
//             <th scope="col">Service Name</th>
//             <th scope="col">Description</th>
//             <th scope="col">City</th>
//             <th scope="col">State</th>
//             <th scope="col">Price Per Unit</th>
//           </tr>
//         </thead>
//         {recom.map((o) => {
//           return (
//             <tbody>
//               <tr id={o.servName}>
//                 <th class="table-bg-transparent" scope="row">
//                   {i++}
//                 </th>
//                 <td class="table-bg-transparent">
//                   <b>{o.servName}</b>
//                 </td>
//                 <td class="table-bg-transparent">
//                   <b>{o.serv_desc}</b>
//                 </td>
//                 <td class="table-bg-transparent">
//                   <b>{o.city}</b>
//                 </td>
//                 <td class="table-bg-transparent">
//                   <b>{o.state}</b>
//                 </td>
//                 <td class="table-bg-transparent">
//                   <b>{o.serv_price}</b>
//                 </td>
//                 <td>
//                   <button
//                     onClick={viewService}
//                     class="btn btn-info"
//                     value={o.id}
//                   >
//                     View
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           );
//         })}
//       </table>
//     </div>
//   );
// }

export default CustomerDashboard;
