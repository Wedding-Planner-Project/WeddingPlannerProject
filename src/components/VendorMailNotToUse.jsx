import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUrl } from "../utils/utils";
import axios from "axios";
import { toast } from "react-toastify";

function VendorMail() {
  const currentUser = sessionStorage.getItem("email");
  const [vmail, setVmail] = useState();
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState({
    custEmail: "",
    vendEmail: "",
    message: "",
  });
  const navigate = useNavigate();
  const handleChange = (args) => {
    const copyOfMsg = { ...msg };
    copyOfMsg[args.target.name] = args.target.value;
    setMsg(copyOfMsg);
  };
  const sendMessage = () => {
    const url = createUrl("/vendor/mail/") + sessionStorage.getItem("email");
    const data = { ...msg };
    data.custEmail = vmail;
    data.vendEmail = sessionStorage.getItem("email");
    axios.post(url, data).then((response) => {
      let res = response.data;
      if (res == true) {
        window.location.reload();
      } else {
        toast.success(res);
      }
    });
  };
  const [messages, setMessages] = useState([
    {
      id: 0,
      custEmail: "",
      vendEmail: "",
      sender: "",
      message: "",
      readStatus: "",
    },
  ]);
  useEffect(() => {
    const url = createUrl("/vendor/chats/") + sessionStorage.getItem("email");
    axios
      .get(url)
      .then((response) => {
        var list = response.data;
        setChats(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const goBack = () => {
    navigate.goBack();
  };
  const bringChats = (args) => {
    const vmail = args.target.value;
    setVmail(vmail);
    const url =
      createUrl("/vendor/messages/") +
      vmail +
      "/" +
      sessionStorage.getItem("email");
    axios
      .get(url)
      .then((response) => {
        const list = response.data;
        setMessages(list);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mb-3 mx-5 p-4">
      <h1>
        <b>Mail Box</b>
      </h1>

      <div id="chatBox" className="row">
        <div className="col-2 border-dark bg-transparent" id="chats">
          {chats.map((c) => {
            return (
              <div id={c} className="border" values={c} onclick={bringChats}>
                {c}
              </div>
            );
          })}
          <div>
            <div className="col-1 border-dark bg-transparent"></div>
          </div>
          <div className="col-1 row box" id="messages">
            <div className="form-control bg-transparent col-12">
              {messages.vendEmail}
            </div>
            {messages.map((m) => {
              if (m.sender != currentUser) {
                return <span className="right">{m.message}</span>;
              } else {
                return <span className="left">{m.message}</span>;
              }
            })}
            <div className="m-3">
              <input
                type="text"
                className="col-11 form-control bg-transparent"
                name="message"
                value={msg.message}
                onChange={handleChange}
              />
              <button className="btn btn-warning" onClick={sendMessage}>
                Send
              </button>
              <button className="btn btn-primary mx-4" onClick={goBack}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VendorMail;
