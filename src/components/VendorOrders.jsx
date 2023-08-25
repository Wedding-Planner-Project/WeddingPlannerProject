import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createUrl } from "../utils/utils";
import { toast } from "react-toastify";
import "../stylings/VendorOrderStyle.css";

function VendorOrders() {
  //index
  let i = 1;

  //error message
  const message = "";
  const navigate = useNavigate();
  const [orders, setOrders] = useState([
    {
      id: 0,
      creat_date: "",
      book_date: "",
      book_status: "",
      order_status: "",
      servName: "",
      serv_price: 0,
      cemail: "",
    },
  ]);

  //on page load bring in all orders
  useEffect(() => {
    const url = createUrl("/vendor/orders/") + sessionStorage.getItem("email");
    // const url =
    //   "http://localhost:8080/Project/vendor/orders/" +
    //   sessionStorage.getItem("email");
    axios
      .get(url)
      .then((response) => {
        const list = response.data;
        setOrders(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //update order function
  const updateOrder = (args) => {
    // debugger;
    const url = createUrl("/vendor/orders/") + args.target.value;
    // const url =
    //   "http://localhost:8080/Project/vendor/orders/" + args.target.value;
    axios.put(url).then((response) => {
      debugger;
      const result = response.data;
      debugger;
      if (result == true) {
        window.location.reload();
        debugger;
      } else {
        //   alert(result);
        toast.success(result);
        // setTimeout(()=>{message=""},3000);
        debugger;
      }
    });
  };

  //cancel order function
  const cancelOrder = (args) => {
    const url = createUrl("/vendor/orders/") + args.target.value;
    // const url =
    //   "http://localhost:8080/Project/vendor/orders/" + args.target.value;
    axios
      .delete(url)
      .then((response) => {
        if (response.data) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-5 mb-1 mx-4">
      <h1 className="centered-content">
        <b>My Orders</b>
      </h1>
      <hr />
      <div>{message}</div>
      <table className="table">
        <thead className="thead-dark">
          <tr className="table-header-bg">
            <th scope="col">Id</th>
            <th scope="col">Service Name</th>
            <th scope="col">Created On</th>
            <th scope="col">Booked On</th>
            <th scope="col">Booking Status</th>
            <th scope="col">Completion Status</th>
            <th scope="col">Price</th>
            <th scope="col">Customer Email</th>
          </tr>
        </thead>
        {orders.map((o) => (
          <tbody key={o.id}>
            <tr id={o.servName}>
              <th className="table-bg-transparent" scope="row">
                {i++}
              </th>
              <td className="table-bg-transparent">
                <b>{o.servName}</b>
              </td>
              <td className="table-bg-transparent">
                <b>{o.creat_date}</b>
              </td>
              <td className="table-bg-transparent">
                <b>{o.book_date}</b>
              </td>
              <td className="table-bg-transparent">
                <b>{o.book_status}</b>
              </td>
              <td className="table-bg-transparent">
                <b>{o.order_status}</b>
              </td>
              <td className="table-bg-transparent">
                <b>{o.serv_price}</b>
              </td>
              <td className="table-bg-transparent">
                <b>{o.cemail}</b>
              </td>
              <td>
                <button
                  className="btn btn-success mx-1"
                  onClick={updateOrder}
                  value={o.id}
                >
                  Mark Completed
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger mx-1"
                  onClick={cancelOrder}
                  value={o.id}
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        ))}
        <tbody>
          <tr>
            <td colSpan="8"></td>
            <td>
              <button className="btn btn-primary mx-4" onClick={goBack}>
                Back
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VendorOrders;
