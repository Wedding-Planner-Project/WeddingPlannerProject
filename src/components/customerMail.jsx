import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../stylings/mailbox.css";
import axios from "axios";
import { createUrl } from "../utils/utils";

function CustomerMail() {
  const currentUser = sessionStorage.getItem("email");
  const [vmail, setVmail] = useState();
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();
  const [msg, setMsg] = useState({
    custEmail: "",
    vendEmail: "",
    message: "",
  });

  const handleChange = (args) => {
    const copyOfMsg = { ...msg };
    copyOfMsg[args.target.name] = args.target.value;
    setMsg(copyOfMsg);
  };

  const sendMessage = () => {
    const url =
      createUrl("/customer/p/mail/") + sessionStorage.getItem("email");
    // const url =
    //   "http://localhost:7570/Project/customer/p/mail/" +
    //   sessionStorage.getItem("email");
    const data = { ...msg };
    data.custEmail = sessionStorage.getItem("email");
    data.vendEmail = vmail;

    axios.post(url, data).then((response) => {
      const res = response.data;
      if (res === true) {
        window.location.reload();
      } else {
        toast.error(res);
      }
    });
  };
  const [messages, setMessages] = useState([
    {
      id: 0,
      custEmail: "",
      vendEmail: "",
      sender: "",
      sentDate: "",
      message: "",
      readStatus: "",
    },
  ]);

  useEffect(() => {
    const url =
      createUrl("/customer/p/chats") + sessionStorage.getItem("email");
    // const url =
    //   "http://localhost:7570/Project/customer/p/chats/" +
    //   sessionStorage.getItem("email");
    axios
      .get(url)
      .then((response) => {
        const list = response.data;
        setChats(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const bringChats = (args) => {
    const vmail = args.target.value;
    setVmail(vmail);
    const url =
      createUrl("/customer/p/messages/") +
      sessionStorage.getItem("email") +
      "/" +
      vmail;
    // const url =
    //   "http://localhost:7570/Project/customer/p/messages/" +
    //   sessionStorage.getItem("email") +
    //   "/" +
    //   vmail;
    // debugger;
    axios
      .get(url)
      .then((response) => {
        debugger;
        const list = response.data;
        setMessages(list);
        debugger;
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="mailbox-container">
      <div className="header">
        <h1 className="mailbox-title">Mailbox</h1>
      </div>
      <div className="chat-wrapper">
        <div className="chat-list">
          {chats.map((chat) => (
            <button
              key={chat}
              className="chat-option"
              onClick={() => bringChats(chat)}
            >
              {chat}
            </button>
          ))}
        </div>
        <div className="message-area">
          <div className="email-header">{messages.vendEmail}</div>
          <div className="message-list">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${
                  message.sender === currentUser ? "sent" : "received"
                }`}
              >
                {message.message}
              </div>
            ))}
          </div>
          <div className="message-input">
            {/* <input
              type="text"
              className="message-text-input"
              name="message"
              value={msg.message}
              onChange={handleChange}
            /> */}
            <textarea
              id="input"
              className="message-text-input"
              rows="3"
              required="required"
              name="message"
              value={msg.message}
              onChange={handleChange}
            ></textarea>
            <button className="send-button" onClick={sendMessage}>
              Send
            </button>
            <button className="back-button" onClick={goBack}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerMail;
