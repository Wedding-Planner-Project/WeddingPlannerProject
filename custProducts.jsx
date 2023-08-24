import { useEffect, useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
function CustomerProduct(props) {
  let i = 1;
  const navigate = useNavigate();

  const [product, setProduct] = useState({
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
  });

  const [order, setOrder] = useState({
    book_date: "",
    servName: "",
    cemail: "",
    vemail: "",
  });
  useEffect(() => {
    const url =
      "http://localhost:7570/Project/customer/service/" +
      props.location.state.sid;
    axios
      .get(url)
      .then((response) => {
        var result = response.data;
        setProduct(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const handleChange = (args) => {
    const copyOfOrders = { ...order };
    copyOfOrders[args.target.name] = args.target.value;
    setOrder(copyOfOrders);
  };

  const createOrder = (args) => {
    order.cemail = sessionStorage.getItem("email");
    order.vemail = product.email;
    order.servName = product.servName;

    const data = { ...order };
    const url =
      "http://localhost:7570/Project/customer/p/createOrder/" + order.cemail;
    axios.post(url, data).then((response) => {
      if (response.data == true) {
        toast.success("added order successfully");
        navigate(-1);
      } else {
        toast.error(response.data);
      }
    });
  };
  const [chat, setChat] = useState({
    custEmail: "",
    vendEmail: "",
    message: "",
  });
  const createChat = () => {
    const url =
      "http://localhost:7570/Project/customer/p/mail/" +
      sessionStorage.getItem("email");
    chat.custEmail = sessionStorage.getItem("email");
    chat.vendEmail = product.email;
    debugger;
    axios
      .post(url, chat)
      .then((response) => {
        if (response.data) {
          navigate("/customer/mail");
        }
      })
      .catch((err) => {
        toast.error(err.message)
      });
  };

  const date = () => {
    <div>
      <input type="date" name="book_date"></input>
    </div>;
  };

  return (
    <div className="row p-5 mb-1 mx-4">
      <h1>
        <b>Customer Services</b>
      </h1>
      <div style={{ width: 600 }}>
        <div className="col-4">
          <button
            className="col-4"
            class="btn btn-warning my-2"
            onClick={goBack}
          >
            back
          </button>
        </div>

        <div id="ServiceDescription" classname="col-4">
          <table className="table-bordered col-4" class="table" striped hover>
            <thead className="thead-dark">
              <tr className="table-bg-transparent">
                <td>Service Name</td>
                <td>{product.servName}</td>
              </tr>
              <tr className="table-bg-transparent">
                <td>Description</td>
                <td>{product.serv_desc}</td>
              </tr>

              <tr className="table-bg-transparent">
                <td>Serving Since</td>
                <td>{product.creatn_date}</td>
              </tr>
              <tr className="table-bg-transparent">
                <td>Name of Vendor</td>
                <td>{product.first_name}</td>
              </tr>
              <tr className="table-bg-transparent">
                <td>Company Name</td> <td>{product.cmp_name}</td>
              </tr>
              <tr className="table-bg-transparent">
                <td>City</td>
                <td>{product.city}</td>
              </tr>
              <tr className="table-bg-transparent">
                <td>State</td>
                <td>{product.state}</td>
              </tr>
              <tr className="table-bg-transparent">
                <td>Vendor Contact info</td>
                <td>{product.mob_no}</td>
              </tr>
              <tr className="table-bg-transparent">
                <td>Price per Unit</td>
                <td>{product.serv_price}</td>
              </tr>
            </thead>
          </table>
        </div>
        {/* <div id="bookingDate" classname="col-4">
        <h4>Choose your date</h4>
        <input type="date" name="book_date" value={order.book_date} onChange={handleChange}></input>
        <button onClick={createOrder}>Create a Booking</button>
    </div>  */}
        <div className="form-group" id="bookingDate" classname="col-4">
          <label for="inputAddress2">Choose your date</label>
          <input
            type="date"
            className="form-control bg-transparent"
            name="book_date"
            id="inputAddress2"
            value={order.book_date}
            onChange={handleChange}
          />
        </div>
        <div className="col-8 my-1">
          <button className="btn btn-primary my-3" onClick={createOrder}>
            Create a Booking
          </button>{" "}
        </div>
        <div className="col-8 my-1">
          <button className="btn btn-primary my-3" onClick={createChat}>
            Talk to the vendor
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default CustomerProduct;
