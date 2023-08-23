
import axios from 'axios';
import { useEffect, useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';
function CustomerDashboard(){
    let i=1;
    const navigate=useNavigate();

    const viewService=(args)=>{
        const behaveUrl="http://localhost:7570/Project/customer/behaviour/"+
        sessionStorage.getItem("email")+
        "/"+args.target.value;
        axios
        .post(behaveUrl)
        .then
        ((response)=>{
            const res=response.data;
        })
        .catch((err)=>{
            console.log(err);
        });
        const sid=args.target.value;
        navigate({pathname:"/customer/browse/product",
                  state:{sid},
    });
    };

    useEffect(()=>{
        var url=
        "http://localhost:7570/Project/customer/p/recommend"+
        sessionStorage.getItem("email");
        axios
            .get(url)
            .then((response)=>{
                const list=response.data;
                setRecom(list);
            })
            
    },[]);

    const [recom,setRecom] =useState([
        {
            id:0,
            serName:"",
            ser_desc:"",
            serv_price:0,
            creatn_date:"",
            first_name:"",
            cmp_name:"",
            pincode:0,
            city:"",
            state:"",
            mob_no:0,
            email:"",
        },
    ]);

    return (
      <div className="p-5 mb-1 mx-4">
        <h1>
          <b>
            <i>Customer Dashboard</i>
          </b>
        </h1>
        <a href="/customer/browse">
          <button class="btn btn-primary mx-4">Browse Service</button>
        </a>
        <a href="/customer/profile">
          <button class="btn btn-primary mx-4">Update Profile</button>
        </a>
        <a href="/customer/order">
          <button class="btn btn-primary mx-4">Orders</button>
        </a>
        <a href="/customer/mail">
          <button class="btn btn-primary mx-4">Mail</button>
        </a>
        <hr />
        <h2>Recommendations for you</h2>

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
          {recom.map((o)=>{
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
                  <b>{o.city}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{o.state}</b>
                </td>
                <td class="table-bg-transparent">
                  <b>{o.serv_price}</b>
                </td>
                <td>
                  <button
                    onClick={viewService}
                    class="btn btn-info"
                    value={o.id}
                  >
                    View
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

export default CustomerDashboard;