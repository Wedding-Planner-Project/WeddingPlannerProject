import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Categories() {
  //category list
  const [category, setCategory] = useState([]);

  //Adding service
  const [service, setService] = useState({ servName: "" });

  //api call to add service
  const addService = (args) => {
    const url =
      "http://localhost:8080/Project/admin/addCategory/" + service.servName;
    axios
      .post(url)
      .then((response) => {
        const res = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  //OnChange handler
  const handleChange = (args) => {
    const copyOfService = { ...service };
    copyOfService[args.target.name] = args.target.value;
    setService(copyOfService);
  };

  //delete service method
  const deleteService = (args) => {
    const url1 =
      "http://localhost:8080/Project/admin/deleteCategory/" + args.target.value;
    axios
      .delete(url1)
      .then((response) => {
        const res = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  //serila no.
  let i = 1;

  //on load gettin list of categories
  useEffect(() => {
    axios
      .get("http://localhost:8080/Project/admin/category")
      .then((response) => {
        const list = response.data;
        setCategory(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-5 mx-4">
      <div style={{ textAlign: "center" }}>
        <h1>
          <b>Categories</b>
        </h1>
      </div>

      <table class="table">
        <tbody>
          <thead class="thead-dark">
            <tr class="table-primary">
              <th scope="col">Serial no.</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          {category.map((c) => {
            return (
              <tr>
                <th class="table-secondary" scope="row">
                  {i++}
                </th>
                <td class="table-danger">{c.servName}</td>

                <td class="table-danger">
                  <button
                    type="button"
                    value={c.servName}
                    onClick={deleteService}
                    class="btn btn-warning"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td class="table-bg-transparent">
              <b>New Category</b>
            </td>
            <td>
              <input
                class="bg-transparent"
                type="text"
                value={service.servName}
                name="servName"
                onChange={handleChange}
              ></input>
            </td>

            <td class="table-bg-transparent">
              <button onClick={addService} class="btn btn-warning">
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Categories;

{
  /* <table>
            <tbody>
                <tr>
                    <td>Serial no.</td>
                    <td>Category</td>
                </tr>
                {category.map((c)=>{
                    return(<tr>
                        <td>{i++}</td>
                        <td>{c.servName}</td>
                        <td><button type="button" value={c.servName} onClick={deleteService}>Delete</button></td>
                    </tr>)
                })}
                <tr>
                    <td><input type="text"  value={service.servName} name="servName" onChange={handleChange} ></input></td>
                    <td><button onClick={addService}>Add</button></td>
                </tr>
            </tbody>
        </table> */
}
