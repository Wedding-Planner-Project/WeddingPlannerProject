import { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
function CustomerOrders() {
  let i = 1;
  const navigate = useNavigate();
  const [orders, setOrders] = useState([
    {
      id: 2,
      creat_date: "2023-03-02",
      book_date: "2023-03-06",
      book_status: "PENDING",
      order_status: "PENDING",
      servName: "CATERING",
      serv_price: 50000.0,
      cmp_name: "Sarvodaya caterers",
      vemail: "sarvodaya@gmail.com",
    },
  ]);

  useEffect(() => {
    const url =
      "http://localhost:7570/Project/customer/p/orders/" +
      sessionStorage.getItem("email");
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

  const updateOrder = (args) => {
    debugger;
    const url =
      "http://localhost:7570/Project/customer/p/orders/" + args.target.value;
    axios.put(url).then((response) => {
      debugger;
      const result = response.data;
      debugger;
      if (result == true) {
        window.location.reload();
        toast.success("update order successfully");
        //debugger;
      } else {
        alert(result);
        // setTimeout(()=>{message=""},3000);
        //debugger;
      }
    });
  };

  const cancelOrder = (args) => {
    const url =
      "http://localhost:7570/Project/customer/p/order/" + args.target.value;
    axios.delete(url).then((resposne) => {
      if (resposne.data) {
        window.location.reload();
        toast.warning("order cancelled");
      }
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-4 mb-1 mx-2">
      <h1>
        <b>
          <i>My Orders</i>
        </b>
      </h1>
      <button onClick={goBack} class="btn btn-warning my-2">
        Back
      </button>
      <table className="table">
        <thead className="thead-dark">
          <tr className="table-primary">
            <th scope="col">Id</th>
            <th scope="col">Service Name</th>
            <th scope="col">Created On</th>
            <th scope="col">Booked For</th>
            <th scope="col">Booking Status</th>
            <th scope="col">Completion Status</th>
            <th scope="col">Price</th>
            <th scope="col">Provider</th>
          </tr>
        </thead>
        {orders.map((o) => {
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
                  <b>{o.cmp_name}</b>
                </td>

                {/* <td><button value={o.servName} onClick={deleteService}>delete</button></td> */}
                <td>
                  <button
                    className="btn btn-success mx-1"
                    onClick={updateOrder}
                    value={o.id}
                  >
                    Confirm Booking
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
          );
        })}
      </table>
    </div>
  );
}

export default CustomerOrders;
