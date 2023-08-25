import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Orders() {
  const [orders, setOrders] = useState([
    {
      book_date: "",
      book_status: "",
      order_status: "",
      servName: "",
      serv_price: 0,
      cemail: "",
      vemail: "",
    },
  ]);

  //index
  let i = 1;

  const navigate = useNavigate();

  //on page load bring in all orders
  useEffect(() => {
    axios
      .get("http://localhost:8080/Project/admin/orders")
      .then((response) => {
        const list = response.data;
        setOrders(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-5 mb-1 mx-4">
      <div style={{ textAlign: "center" }}>
        <h1>
          <b>All orders</b>
        </h1>
      </div>
      <hr />
      <button class="btn col-1 btn-dark mx-4" onClick={goBack}>
        Back
      </button>
      <table class="table">
        <thead class="thead-dark">
          <tr class="table-primary">
            <th scope="col">Id</th>
            <th scope="col">Booking date</th>
            <th scope="col">Confirmation Status</th>
            <th scope="col">Completion Status</th>
            <th scope="col">Service Name</th>
            <th scope="col">Price</th>
            <th scope="col">Customer Email</th>
            <th scope="col">Vendor Email</th>
          </tr>
        </thead>
        {orders.map((o) => {
          return (
            <tbody>
              <tr id={o.email}>
                <th class="table-bg-transparent" scope="row">
                  {i++}
                </th>
                <td class="table-bg-transparent">
                  <b>{o.book_date}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{o.book_status}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{o.order_status}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{o.servName}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{o.serv_price}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{o.cemail}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{o.vemail}</b>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Orders;

// <table>
//             <tr>
//                 <td>Id</td>
//                 <td>Booking date</td>
//                 <td>Confirmation Status</td>
//                 <td>Completion Status</td>
//                 <td>Service Name</td>
//                 <td>Price</td>
//                 <td>Customer Email</td>
//                 <td>Vendor Email</td>
//             </tr>
//             {orders.map((o)=>{
//                 return(
//                     <tr id={o.email}>
//                 <td>{i++}</td>
//                 <td>{o.book_date}</td>
//                 <td>{o.book_status}</td>
//                 <td>{o.order_status}</td>
//                 <td>{o.servName}</td>
//                 <td>{o.serv_price}</td>
//                 <td>{o.cemail}</td>
//                 <td>{o.vemail}</td>
//             </tr>
//                 )
//             })}
//         </table>
