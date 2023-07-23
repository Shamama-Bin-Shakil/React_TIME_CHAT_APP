import { useParams } from "react-router-dom";
import { Container } from "./Chat.styled";
import socketIO from "socket.io-client";
import { useEffect, useState } from "react";
import Message from "./Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
const ENDPOINT = "http://localhost:5000";
let socket;
const Chat = () => {
  const { name } = useParams();
  const [id, setId] = useState("");
  const [messages, setMessage] = useState([]);

  const send = () => {
    let message = document.getElementById("chatInput").value;
    socket.emit("message", { id, message });
    console.log(message);
    message = "";
  };

  useEffect(() => {
    socket = socketIO(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
      console.log("Connected");
      setId(socket.id);
    });

    // socket.emit that mean send data
    socket.emit("joined", { name: name });

    // socket.on that mean receive data
    socket.on("welcome", (data) => {
      setMessage([...messages, data]);
      console.log(data);
    });

    socket.on("userJoined", (data) => {
      setMessage([...messages, data]);
      console.log(data);
    });

    socket.on("userLeft", (data) => {
      setMessage([...messages, data]);
      console.log(data);
    });

    return () => {
      socket.on("disconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessage([...messages, data]);
      console.log(data);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  return (
    <Container>
      <div className="chatContainer">
        <div className="header">
          <h2>CHAT BOT</h2>
        </div>
        <ReactScrollToBottom className="chatBox">
          {messages.map((item, index) => {
            console.log(item);
            return (
              <Message
                key={index}
                message={item.message}
                classs={item.id === id ? "right" : "left"}
                user={item.id === id ? "" : item.user}
              />
            );
          })}
        </ReactScrollToBottom>
        <div className="inputBox">
          <input
            type="text"
            id="chatInput"
            onKeyPress={(event) => (event.key === "Enter" ? send() : null)}
          />
          <button onClick={send} className="sendBtn">
            Send
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Chat;
